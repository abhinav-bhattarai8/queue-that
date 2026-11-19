import { EntityManager } from "@mikro-orm/core";
import { Injectable, Logger } from "@nestjs/common";
import { ExecutionService } from "../executions/executions.service.js";
import { Cron } from "@nestjs/schedule";
import { CronTriggerConfig, WorkflowSchema } from "./entities/workflow.entities.js";
import { CronExpressionParser } from "cron-parser";

@Injectable()
export class CronTriggerService {
    private readonly logger = new Logger(CronTriggerService.name);
    private isTickRunning = false;

    constructor(private readonly em: EntityManager,
        private readonly executionService: ExecutionService
    ){}

    @Cron('0 * * * * *', {timeZone: 'UTC'})
    async handleCronTick(): Promise<void> {
        if(this.isTickRunning) return;

        this.isTickRunning = true;
        try {
            const now = new Date();
            const workflows = await this.em.find(WorkflowSchema, {
                enabled:true, triggerType: 'cron'
            });

            for (const workflow of workflows) {
                const config = workflow.triggerConfig as CronTriggerConfig | null;
                
                if(!config?.cron) continue;

                let prevRunDate: Date;
                try {
                    const interval =  CronExpressionParser.parse(config.cron, {currentDate: now, tz: 'UTC'});
                    prevRunDate = interval.prev().toDate();
                } catch (err) {
                    this.logger.warn(`Skipping workflow ${workflow.id} due to invalid 
                        cron "${config.cron}": ${(err as Error).message}`,
                    );
                    continue;
                }

                const lastRun = workflow.lastTriggeredAt ? new Date(workflow.lastTriggeredAt) : null;
                const alreadyRanForSchedule = lastRun !== null && lastRun >= prevRunDate;
                if (alreadyRanForSchedule) continue;

                const triggeredAtIso = now.toISOString();
                workflow.lastTriggeredAt = now;
                workflow.triggerConfig = {...config, lastRunAt: triggeredAtIso};
                await this.em.flush();

                await this.executionService.runWorkflow(workflow.id.toString());
            }
        }
        
        catch (err) {
            this.logger.error(`Cron tick failed: ${(err as Error).message}`,(err as Error).stack,);
        } 
        
        finally {
            this.isTickRunning = false;
        }
    }
}
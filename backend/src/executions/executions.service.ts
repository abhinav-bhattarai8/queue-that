import { InjectRepository } from "@mikro-orm/nestjs";
import { BadRequestException, Injectable } from "@nestjs/common";
import { ExecutionLogSchema, IExecutionLog } from "./entities/execution-log.entities.js";
import { EntityManager, EntityRepository } from "@mikro-orm/core";
import { WorkflowService } from "../workflows/workflows.service.js";
import {StepService} from "../workflows/steps.service.js";
import { IStep } from "../workflows/entities/step.entity.js";

@Injectable()
export class ExecutionService{
    constructor(
        @InjectRepository(ExecutionLogSchema)
        private readonly executionRepository: EntityRepository<IExecutionLog>,
        private readonly workflowServide: WorkflowService,
        private readonly em: EntityManager,
        private readonly stepService: StepService
    ){};

    async runWorkflow(workflowId: string) {
        const em = this.em.fork();
        const numericId = parseInt(workflowId, 10);
        const workflow = await this.workflowServide.findWorkflowById(workflowId); 
        await em.populate(workflow, ['steps']);

        const executionLog = em.create(ExecutionLogSchema, {
            workflow: workflow,
            status: 'PENDING',
            output: null
        });

        await em.persist(executionLog).flush();

        try {
            const stepResults : any[] = [];
            const sortedSteps = [...workflow.steps].sort((a,b) => a.position - b.position);

            for (const step of sortedSteps) {
                const result = this.runStep(step);
                stepResults.push({stepId: step.id, nodeType: step.nodeType, result });
            }

            executionLog.status = 'SUCCESS';
            executionLog.output = {steps: stepResults};
            await em.flush();
            return executionLog;
        }
        catch (e: any){
            executionLog.status = 'FAILED';
            executionLog.output = {error: e.message };
            await em.flush();
            throw e;
        }
    }

    private async runStep(step: IStep) {
        const config = (step.config || {}) as Record<string, any>;

        switch(step.nodeType) {
            case 'http_request': {
                const response = await fetch(config.url, {
                    method: config.method || 'GET',
                    headers: config.head || {},
                    body: config.body ? JSON.stringify(config.body) : undefined 
                });

                const data = await response.json();
                return {status: response.status, data};
            }

            default:
                return {message: `Successfully executed step ${step.nodeType}`};
        }
    }


}
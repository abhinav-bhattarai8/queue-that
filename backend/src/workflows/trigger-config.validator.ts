import { BadRequestException } from "@nestjs/common";
import { CronTriggerConfig, TriggerType } from "./entities/workflow.entities.js";
import { CronExpressionParser } from "cron-parser";

export function validateTriggerConfig(triggerType: TriggerType,
    triggerConfig: unknown
): CronTriggerConfig | Record<string, unknown> | null {

    if(triggerType != 'cron') {
        return (triggerConfig as Record<string, unknown>) ?? null;
    }

    const config = triggerConfig as CronTriggerConfig | null | undefined;
    if (!config?.cron || typeof config.cron !== 'string') {
        throw new BadRequestException('Cron workflow requires triggerConfig.cron');
    }

    try {
        CronExpressionParser.parse(config.cron.trim(), {tz: 'UTC'});
    }
    catch {
        throw new BadRequestException(`Invalid cron expression: ${config.cron}`);
    }

    return {
        ...config, cron: config.cron.trim()
    };
}
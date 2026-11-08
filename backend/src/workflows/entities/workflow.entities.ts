import {defineEntity, type InferEntity, p} from '@mikro-orm/core';
import { StepSchema } from './step.entity.js';

export const WorkFlowSchema = defineEntity({
    name: 'workflow',
    properties: {
        id: p.integer().primary(),
        name: p.string(),
        description: p.string().nullable(),
        enabled: p.boolean(),
        triggerType: p.string(),
        triggerConfig: p.json().nullable(),
        webhookId: p.string().nullable().unique(),
        steps: () => p.oneToMany(StepSchema).mappedBy('workflow')
    }
});

export type IWorkFlow = InferEntity<typeof WorkFlowSchema>;
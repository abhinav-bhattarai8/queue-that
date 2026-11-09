import  {defineEntity, InferEntity, p} from '@mikro-orm/core';
import { WorkflowSchema } from './workflow.entities.js';

export const StepSchema = defineEntity({
    name: 'step',
    properties: {
        id: p.integer().primary(),
        workflow: () => p.manyToOne(WorkflowSchema),
        position: p.integer(),
        nodeType: p.string(),
        config: p.json().nullable()
    }
});

export type IStep = InferEntity<typeof StepSchema>;
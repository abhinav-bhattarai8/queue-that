import {defineEntity, InferEntity, p} from '@mikro-orm/core';
import { WorkflowSchema } from '../../workflows/entities/workflow.entities.js';

export const ExecutionLogSchema = defineEntity({
    name: 'execution-log',
    properties: {
        id: p.integer().primary(),
        workflow: p.manyToOne(WorkflowSchema),
        status: p.enum(['SUCCESS', 'PENDING', 'FAILED']),
        output: p.json().nullable(),
        createdAt: p.datetime().onCreate( () => new Date()),

    }
});

export type IExecutionLog = InferEntity<typeof ExecutionLogSchema>;
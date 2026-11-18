import {defineConfig} from '@mikro-orm/postgresql';
import { WorkflowSchema } from '../workflows/entities/workflow.entities.js';
import { Migrator } from '@mikro-orm/migrations';
import { StepSchema } from '../workflows/entities/step.entity.js';
import * as dotenv from 'dotenv';
import { ExecutionLogSchema } from '../executions/entities/execution-log.entities.js';

dotenv.config()

export default defineConfig({
    entities: [WorkflowSchema, StepSchema, ExecutionLogSchema],
    clientUrl: process.env.SUPABASE_DB_URL,
    driverOptions: {
        ssl: {rejectUnauthorized: false}
    },
    extensions: [Migrator],
    migrations: {
        path: './dist/migrations',
        pathTs: './src/migrations',
    },
});
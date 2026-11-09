import {defineConfig} from '@mikro-orm/postgresql';
import { WorkflowSchema } from '../workflows/entities/workflow.entities.js';
import { Migrator } from '@mikro-orm/migrations';
import { StepSchema } from '../workflows/entities/step.entity.js';
import * as dotenv from 'dotenv';

dotenv.config()

export default defineConfig({
    entities: [WorkflowSchema, StepSchema],
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
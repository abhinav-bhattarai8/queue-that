import {defineConfig} from '@mikro-orm/postgresql';
import { WorkFlowSchema } from '../workflows/entities/workflow.entities.js';
import { StepSchema } from '../workflows/entities/step.entity.js';
import * as dotenv from 'dotenv';

dotenv.config()

export default defineConfig({
    entities: [WorkFlowSchema, StepSchema],
    clientUrl: process.env.SUPABASE_DB_URL,
    driverOptions: {
        ssl: {rejectUnauthorized: false}
    },
    migrations: {
        path: './dist/migrations',
        pathTs: './src/migrations',
    },
});
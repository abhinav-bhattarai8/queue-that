import {defineConfig} from '@mikro-orm/postgresql';
import { WorkFlowSchema } from '../workflows/entities/workflow.entities.js';
import { StepSchema } from '../workflows/entities/step.entity.js';

export default defineConfig({
    entities: [WorkFlowSchema, StepSchema],
    clientUrl: process.env.SUPABASE_DB_URL,
    driverOptions: {
        connection: {
            ssl: {rejectUnauthorized: false}
        }
    }
});
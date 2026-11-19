import {forwardRef, Module} from '@nestjs/common';
import {MikroOrmModule} from '@mikro-orm/nestjs';
import { WorkflowSchema } from './entities/workflow.entities.js';
import { WorkflowController } from './workflows.controller.js';
import { WorkflowService } from './workflows.service.js';
import { StepSchema } from './entities/step.entity.js';
import { StepController } from './steps.controller.js';
import { StepService } from './steps.service.js';
import { ExecutionModule } from '../executions/execution.module.js';
import { CronTriggerService } from './cron-trigger.service.js';

@Module({
    imports:[MikroOrmModule.forFeature([WorkflowSchema, StepSchema]), forwardRef(() => ExecutionModule)],
    controllers:[WorkflowController, StepController],
    providers:[WorkflowService, StepService, CronTriggerService],
    exports: [WorkflowService, StepService, CronTriggerService]
})

export class WorkflowModule{}


import {Module} from '@nestjs/common';
import {MikroOrmModule} from '@mikro-orm/nestjs';
import { WorkflowSchema } from './entities/workflow.entities.js';
import { WorkflowController } from './workflows.controller.js';
import { WorkflowService } from './workflows.service.js';
import { StepSchema } from './entities/step.entity.js';
import { StepController } from './steps.controller.js';
import { StepService } from './steps.service.js';

@Module({
    imports:[MikroOrmModule.forFeature([WorkflowSchema, StepSchema])],
    controllers:[WorkflowController, StepController],
    providers:[WorkflowService, StepService],
    exports: [WorkflowService, StepService]
})

export class WorkflowModule{}


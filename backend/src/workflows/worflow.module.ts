import {Module} from '@nestjs/common';
import {MikroOrmModule} from '@mikro-orm/nestjs';
import { WorkflowSchema } from './entities/workflow.entities.js';
import { WorkflowController } from './workflows.controller.js';
import { WorkflowService } from './workflows.service.js';
import { StepSchema } from './entities/step.entity.js';

@Module({
    imports:[MikroOrmModule.forFeature([WorkflowSchema, StepSchema])],
    controllers:[WorkflowController],
    providers:[WorkflowService],
    exports: [WorkflowService]
})

export class WorkflowModule{}


import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { ExecutionLogSchema } from "./entities/execution-log.entities.js";
import { ExecutionController } from "./executions.controller.js";
import { ExecutionService } from "./executions.service.js";
import { WorkflowModule } from "../workflows/worflow.module.js";

@Module({
    imports: [MikroOrmModule.forFeature([ExecutionLogSchema]), WorkflowModule],
    controllers: [ExecutionController],
    providers: [ExecutionService],
    exports: [ExecutionService]
})

export class ExecutionModule{}
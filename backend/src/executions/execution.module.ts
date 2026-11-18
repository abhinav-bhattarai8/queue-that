import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { ExecutionLogSchema } from "./entities/execution-log.entities.js";
import { ExecutionController } from "./executions.controller.js";
import { ExecutionService } from "./executions.service.js";

@Module({
    imports: [MikroOrmModule.forFeature([ExecutionLogSchema])],
    controllers: [ExecutionController],
    providers: [ExecutionService],
    exports: [ExecutionService]
})

export class ExecutionModule{}
import { Module } from '@nestjs/common';
import { WorkflowModule } from './workflows/worflow.module.js';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from './config/mikro-orm.config.js';
import { ExecutionModule } from './executions/execution.module.js';


@Module({
  imports: [MikroOrmModule.forRoot(config),WorkflowModule, ExecutionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

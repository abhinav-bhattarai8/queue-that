import { Module } from '@nestjs/common';
import { WorkflowModule } from './workflows/worflow.module.js';


@Module({
  imports: [WorkflowModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

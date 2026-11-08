import { Module } from '@nestjs/common';
import { WorkflowModule } from './workflows/worflow.module.js';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from './config/mikro-orm.config.js';


@Module({
  imports: [MikroOrmModule.forRoot(config),WorkflowModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import {Controller, Post, Param} from '@nestjs/common';
import { ExecutionService } from './executions.service.js';

@Controller('workflows')
export class ExecutionController {
    constructor(
        private readonly executionService: ExecutionService
    ) {};

    @Post(':id/execute')
    async execute(@Param('id') id:string) {
        return await this.executionService.runWorkflow(id);
    }
}

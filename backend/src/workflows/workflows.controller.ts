import {Body, Post, Controller, Get, Param, Patch, Delete} from "@nestjs/common";
import { WorkflowService } from "./workflows.service.js";
import { CreateWorkflowDto } from "./dto/create-workflow.dto.js";
import { UpdateWorkflowDto } from "./dto/update-workflow.dto.js";

@Controller('workflows')
export class WorkflowController {
    constructor (private readonly workflowService: WorkflowService){}

    @Post()
    async create(@Body() createWorkflowDto: CreateWorkflowDto) {
        return await this.workflowService.createWorkflow(createWorkflowDto);
    }

    @Get()
    async findAll() {
        return await this.workflowService.findAllWorkflows();
    }

    @Get(':id')
    async findOne(@Param('id') id:string) {
        return await this.workflowService.findWorkflowById(id);
    }

    @Patch(':id')
    async update(@Param('id') id:string, @Body() updateDto: UpdateWorkflowDto) {
        return await this.workflowService.updateWorkflow(id, updateDto); 
    }

    @Delete(':id')
    async delete(@Param('id') id:string) {
        return await this.workflowService.removeWorkflow(id);
    } 

}
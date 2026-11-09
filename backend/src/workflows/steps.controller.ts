import  {Controller, Param, Body, Patch, Delete, Get, Post} from '@nestjs/common';
import { StepService } from './steps.service.js';
import { CreateStepDto } from './dto/create-step.dto.js';
import {UpdateStepDto} from './dto/update-step.dto.js';

@Controller('workflows/:workflowId/steps')
export class StepController {
    constructor(
        private readonly stepsService: StepService
    ) {}

    @Post()
    async create(@Param('workflowId')workflowId: string, @Body() createStepDto: CreateStepDto) {
        return await this.stepsService.createStep(workflowId, createStepDto);
    }

    @Get()
    async findAll(@Param('workflowId') workflowId: string) {
        return await this.stepsService.getStepsForWorkflow(workflowId);
    }

    @Get(':stepId')
    async findOne(@Param('workflowId') workflowId:string, 
    @Param('stepId') stepId: string) {
        return this.stepsService.getStepById(workflowId, stepId);
    }

    @Patch(':stepId')
    async update(
        @Param('workflowId') workflowId: string, 
        @Param('stepId') stepId: string, 
        @Body() updateStepDto: UpdateStepDto
    ) {
        return await this.stepsService.updateStep(workflowId, stepId, updateStepDto);
    }

    @Delete(':stepId')
    async remove(
        @Param('workflowId') workflowId: string, 
        @Param('stepId') stepId: string
    ) {
        return await this.stepsService.removeStep(workflowId, stepId);
    }
}
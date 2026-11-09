import { EntityManager, EntityRepository, wrap } from "@mikro-orm/core";
import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { IStep, StepSchema } from "./entities/step.entity.js";
import { InjectRepository } from "@mikro-orm/nestjs";
import { CreateStepDto } from "./dto/create-step.dto.js";
import { IWorkflow, WorkflowSchema } from "./entities/workflow.entities.js";
import { UpdateStepDto } from "./dto/update-step.dto.js";

@Injectable()
export class StepService {
    constructor(
        @InjectRepository(StepSchema)
        private readonly stepRepository: EntityRepository<IStep>,
        private readonly em: EntityManager
    ) {}

    async findWorkflow(workflowId: string, customEm?: EntityManager): Promise<IWorkflow> {
        const numericId = parseInt(workflowId,10);
        if(isNaN(numericId)) {
            throw new BadRequestException('Invalid workflow ID format');
        }

        const em = customEm ?? this.em.fork();
        const workflow = await em.findOne(WorkflowSchema,{id: numericId});
        
        if(!workflow) {
            throw new NotFoundException('Requested workflow not found');
        }

        return workflow;

    }

    async createStep(workflowId: string, createStepDto: CreateStepDto) {

        const em = this.em.fork();
        const workflow = await this.findWorkflow(workflowId);

        const step = em.create(StepSchema, {...createStepDto, 
            config: createStepDto.config ?? null, workflow} as any);

        await em.persist(step).flush();
        return step;

    }

    async getStepsForWorkflow(workflowId: string) {
        const em = this.em.fork();
        const workflow = await this.findWorkflow(workflowId);

        const populatedWorkflow = await em.findOne(WorkflowSchema, {id: workflow.id}, {populate: ['steps']});

        return populatedWorkflow?.steps ?? [];
    }

    async getStepById(workflowId:string, stepId: string, customEm?: EntityManager) {
        const em = customEm ?? this.em.fork();
        const workflow = await this.findWorkflow(workflowId);

        const numericStepId = parseInt(stepId, 10);
        if (isNaN(numericStepId)) {
            throw new BadRequestException('Invalid step ID format');
        }

        const step = await em.findOne(StepSchema, {id: numericStepId, workflow: workflow.id});

        if (!step) {
            throw new NotFoundException('Requested step not found');
        }

        return step;

    }

    async removeStep(workflowId: string, stepId: string ) {
        const em = this.em.fork();
        const step = this.getStepById(workflowId, stepId, em);

        em.remove(step);
        await em.flush();

        return {message: 'Step deleted successfully'};

    }

    async updateStep(workflowId: string, stepId: string, updateStepDto: UpdateStepDto) {
        const em = this.em.fork();
        const step = this.getStepById(workflowId, stepId, em);

        wrap(step).assign(updateStepDto as any);
        await em.flush();
        return step;
    }
}
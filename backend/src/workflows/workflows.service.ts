import { Injectable } from "@nestjs/common";
import {InjectRepository} from '@mikro-orm/nestjs'
import {CreateWorkflowDto} from './dto/create-workflow.dto.js'
import { IWorkFlow, WorkFlowSchema } from "./entities/workflow.entities.js";
import { EntityRepository } from "@mikro-orm/core";
import crypto from 'crypto';

@Injectable()
export class WorkflowService {
    constructor(
        @InjectRepository(WorkFlowSchema) 
        private readonly workflowRepository: EntityRepository<IWorkFlow>
    ){}
    
    async createWorkflow(dto: CreateWorkflowDto) {
        const workflow = this.workflowRepository.create({
            name: dto.name,
            description: dto.description ?? null,
            enabled: true,
            triggerType: dto.triggerType,
            triggerConfig: dto.triggerConfig ?? null,
            webhookId: dto.triggerType === 'webhook' ? this.generateUniqueId() : null
        });

        await this.workflowRepository.getEntityManager().persist(workflow).flush();

        return workflow;
   }

   generateUniqueId() {
    return crypto.randomUUID();
   }

   async findAllWorkflows() {
    return await this.workflowRepository.findAll({populate: ['steps']});
   }

   async findWorkflowById(id: number):Promise<IWorkFlow | null> {
    return await this.workflowRepository.findOne({id});
   }
}
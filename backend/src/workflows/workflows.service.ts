import { BadRequestException, Injectable } from "@nestjs/common";
import {InjectRepository} from '@mikro-orm/nestjs'
import {CreateWorkflowDto} from './dto/create-workflow.dto.js'
import { IWorkFlow, WorkFlowSchema } from "./entities/workflow.entities.js";
import { EntityRepository, NotFoundError, wrap } from "@mikro-orm/core";
import crypto from 'crypto';
import { UpdateWorkflowDto } from "./dto/update-workflow.dto.js";
import { emitKeypressEvents } from "readline";

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

   async findWorkflowById(id: string):Promise<IWorkFlow | null> {
    const numericId = parseInt(id,10);

    if(isNaN(numericId)) {
        throw new BadRequestException('Invalid workflow ID format');
    }

    return await this.workflowRepository.findOne({id: numericId});
   }

   async updateWorkflow(id: string, updateDto:UpdateWorkflowDto) {
     const workflow = await this.findWorkflowById(id);
     
     if(!workflow) {
        throw new NotFoundError('Requested worflow not found');
     }

     wrap(workflow).assign(updateDto as any);

     await this.workflowRepository.getEntityManager().flush();

     return workflow;
   }

   async removeWorkflow(id: string) {
     const workflow = await this.findWorkflowById(id);
     
     if(!workflow) {
        throw new NotFoundError('Requested worflow not found');
     }

     this.workflowRepository.getEntityManager().remove(workflow);

     await this.workflowRepository.getEntityManager().flush();
    
   }
}
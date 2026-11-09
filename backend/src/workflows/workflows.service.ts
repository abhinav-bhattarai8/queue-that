import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import {InjectRepository} from '@mikro-orm/nestjs'
import {CreateWorkflowDto} from './dto/create-workflow.dto.js'
import { IWorkflow, WorkflowSchema } from "./entities/workflow.entities.js";
import { EntityManager, EntityRepository} from "@mikro-orm/core";
import crypto from 'crypto';
import { UpdateWorkflowDto } from "./dto/update-workflow.dto.js";

@Injectable()
export class WorkflowService {
    constructor(
        @InjectRepository(WorkflowSchema) 
        private readonly workflowRepository: EntityRepository<IWorkflow>,
        private readonly em:EntityManager
    ){}
    
    async createWorkflow(dto: CreateWorkflowDto) {
        const em = this.em.fork();
        
        const workflow = em.create(WorkflowSchema, {...dto, enabled:dto.enabled??true} as any);

        await em.persist(workflow).flush();

        return workflow;
   }

   generateUniqueId() {
    return crypto.randomUUID();
   }

   async findAllWorkflows() {
    return await this.workflowRepository.findAll({populate: ['steps']});
   }

   async findWorkflowById(id: string, customEm?: EntityManager ):Promise<IWorkflow> {
    const numericId = parseInt(id,10);

    if(isNaN(numericId)) {
        throw new BadRequestException('Invalid workflow ID format');
    }

    const em = customEm ?? this.em.fork();
    const workflow = await em.findOne(WorkflowSchema, {id: numericId});
    
    if (!workflow) {
        throw new NotFoundException('Requested workflow not found');
    }
    return workflow;
   }

   async updateWorkflow(id: string, updateDto:UpdateWorkflowDto) {
     const em = this.em.fork();
     const workflow = await this.findWorkflowById(id, em);
     
     em.assign(workflow, updateDto as any);

     await em.flush();

     return workflow;
   }

   async removeWorkflow(id: string) {
     const em = this.em.fork();
     const workflow = await this.findWorkflowById(id, em);
     await em.populate(workflow, ['steps']);
     em.remove(workflow.steps);
     em.remove(workflow);

     await em.flush();
     return { message: 'Workflow deleted successfully' };
    
   }
}
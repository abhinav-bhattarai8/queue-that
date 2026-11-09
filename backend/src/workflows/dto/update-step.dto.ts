import {PartialType} from '@nestjs/mapped-types';
import {CreateStepDto} from './create-step.dto.js';

export class UpdateStepDto extends PartialType(CreateStepDto) {}
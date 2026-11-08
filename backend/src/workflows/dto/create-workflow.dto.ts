import {IsString, IsNotEmpty, IsObject, IsOptional} from 'class-validator';

export class CreateWorkflowDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString() 
    @IsNotEmpty()
    triggerType!: string;

    @IsObject()
    @IsOptional()
    triggerConfig?: Record<string, any>;
}
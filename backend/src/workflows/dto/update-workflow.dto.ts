import {IsNotEmpty, IsOptional, IsString, IsObject} from 'class-validator';

export class UpdateWorkflowDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString() 
    @IsOptional()
    triggerType?: string;

    @IsObject()
    @IsOptional()
    triggerConfig?: Record<string, any>;
}
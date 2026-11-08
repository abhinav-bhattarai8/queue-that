import {IsString, IsNotEmpty, IsObject, IsOptional, IsBoolean} from 'class-validator';

export class CreateWorkflowDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    enabled?: boolean;

    @IsString() 
    @IsNotEmpty()
    triggerType!: string;

    @IsObject()
    @IsOptional()
    triggerConfig?: Record<string, any>;
}
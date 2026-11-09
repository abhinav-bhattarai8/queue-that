import { IsOptional, IsNumber, IsString, IsObject } from "class-validator";

export class UpdateStepDto {

    @IsNumber()
    @IsOptional()
    position? : number;

    @IsString()
    @IsOptional()
    nodeType?: string;

    @IsObject()
    @IsOptional()
    config?: Record<string, any>;


}
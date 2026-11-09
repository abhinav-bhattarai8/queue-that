import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";

export class CreateStepDto {
    @IsNumber()
    @IsNotEmpty()
    position!: number;

    @IsString()
    @IsNotEmpty()
    nodeType: string;

    @IsObject()
    @IsOptional()
    config?: Record<string, any>;

}
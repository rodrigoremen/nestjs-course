import {  IsString, MinLength } from 'class-validator';

export class createTaskDto {
    id: number;

    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @MinLength(1)
    description: string;
}

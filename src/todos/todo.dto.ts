import { Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  title: string;
}

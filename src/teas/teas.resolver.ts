import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TeasService } from './teas.service';
import * as GraphQLTypes from '../graphql-types';
import { ParseIntPipe } from '@nestjs/common';
import { CreateCoffeeInput } from 'src/coffees/dto/create-coffee.input';

@Resolver()
export class TeasResolver {
  constructor(private readonly teasService: TeasService) {}

  @Query('teas')
  async findAll(): Promise<GraphQLTypes.Tea[]> {
    return await this.teasService.findAll();
  }

  @Query('tea')
  async findOne(
    @Args('id', ParseIntPipe) id: number,
  ): Promise<GraphQLTypes.Tea> {
    return await this.teasService.findOne(id);
  }

  @Mutation('createTea')
  async create(
    @Args('createTeaInput') createTeaInput: CreateCoffeeInput,
  ): Promise<GraphQLTypes.Tea> {
    return await this.teasService.create(createTeaInput);
  }
}

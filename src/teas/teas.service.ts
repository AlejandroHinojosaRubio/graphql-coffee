import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tea } from './entities/tea.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInputError } from '@nestjs/apollo';
import { CreateTeaInput } from './dto/create-tea.input';

@Injectable()
export class TeasService {
  constructor(
    @InjectRepository(Tea)
    private readonly teasRepository: Repository<Tea>,
  ) {}

  async findAll(): Promise<Tea[]> {
    return this.teasRepository.find();
  }

  async findOne(id: number): Promise<Tea> {
    const tea = this.teasRepository.findOne({ where: { id } });
    if (!tea) {
      throw new UserInputError(`Tea #${id} does not exist`);
    }
    return tea;
  }

  async create(createTeaInput: CreateTeaInput): Promise<Tea> {
    const tea = this.teasRepository.create(createTeaInput);
    return this.teasRepository.save(tea);
  }
}

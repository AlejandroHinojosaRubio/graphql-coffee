import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as GraphQLTypes from '../../graphql-types';

@Entity()
export class Tea implements GraphQLTypes.Tea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @CreateDateColumn()
  createdAt?: Date | null;
}

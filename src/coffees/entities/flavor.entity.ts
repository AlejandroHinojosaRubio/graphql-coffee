import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as GraphQLTypes from '../../graphql-types';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor extends GraphQLTypes.Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Coffee, (coffee) => coffee.flavors) /* inverse side */
  coffees: Coffee[];
}

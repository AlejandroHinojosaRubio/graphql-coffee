import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DateScalar } from './common/scalars/date.scalar';
import { DrinksResolver } from './drinks/drinks.resolver';
import { TeasModule } from './teas/teas.module';
import { PubSubModule } from './pub-sub/pub-sub.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      logging: ['query'],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    CoffeesModule,
    TeasModule,
    PubSubModule,
  ],
  controllers: [AppController],
  providers: [AppService, DateScalar, DrinksResolver],
})
export class AppModule {}

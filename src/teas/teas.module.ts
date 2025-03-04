import { Module } from '@nestjs/common';
import { TeasService } from './teas.service';
import { TeasResolver } from './teas.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tea } from './entities/tea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tea])],
  providers: [TeasService, TeasResolver],
})
export class TeasModule {}

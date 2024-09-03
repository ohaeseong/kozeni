import { Module } from '@nestjs/common';
import { ReviewController } from './tag.controller';
import { ReviewService } from './tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}

import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, User])],
  controllers: [ReviewController],
  providers: [ReviewService, UserService],
})
export class ReviewModule {}

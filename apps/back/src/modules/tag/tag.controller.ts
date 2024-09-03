import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateReviewDto } from 'src/dtos/review.dto';
import { Review } from './tag.entity';
import { ReviewService } from './tag.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get('/')
  getReviews(): Promise<Array<Review>> {
    return this.reviewService.getReviews();
  }

  @Post('/')
  @UseGuards(AuthGuard)
  createReview(
    @Req() req: Request,
    @Body() body: CreateReviewDto,
  ): Promise<Array<Review>> {
    // const { userId } = req.user;
    console.log(body, 'test');

    return this.reviewService.getReviews();
  }

  @Put('/')
  updateReview(): Promise<Array<Review>> {
    return this.reviewService.getReviews();
  }

  @Delete('/')
  deleteReview(): Promise<Array<Review>> {
    return this.reviewService.getReviews();
  }
}

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
import {
  CreateReviewDto,
  DeleteReviewDto,
  UpdateReviewDto,
} from 'src/dtos/review.dto';
import { Review } from './review.entity';
import { ReviewService } from './review.service';
import { AuthGuard } from '../auth/auth.guard';
import { RequestWithToken } from 'src/dtos/request.dto';
import { UserService } from '../user/user.service';
import { ResponseWithCode } from 'src/types/response';

@Controller('review')
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly userService: UserService,
  ) {}

  @Get('/')
  getReviews(): Promise<Array<Review>> {
    return this.reviewService.getReviews();
  }

  @Post('/')
  @UseGuards(AuthGuard)
  async createReview(
    @Req() req: RequestWithToken,
    @Body() body: CreateReviewDto,
  ): Promise<Review | ResponseWithCode> {
    const { userId } = req.user;

    const params = {
      userId,
      ...body,
    };

    const user = await this.userService.getUserById({ userId });

    if (!user) {
      return {
        error: 'User not found',
        statusCode: 404,
      };
    }

    return await this.reviewService.createReview(params);
  }

  @Put('/')
  @UseGuards(AuthGuard)
  async updateReview(
    @Req() req: RequestWithToken,
    @Body() body: UpdateReviewDto,
  ): Promise<Review | ResponseWithCode> {
    const { userId } = req.user;

    const user = await this.userService.getUserById({ userId });

    if (!user) {
      return {
        error: 'User not found',
        statusCode: 404,
      };
    }

    const review = await this.reviewService.getReviewById({ id: body.id });

    if (!review) {
      return {
        error: 'Review not found',
        statusCode: 404,
      };
    }

    if (review.userId !== userId) {
      return {
        error: 'User is not author',
        statusCode: 403,
      };
    }

    const params = {
      ...body,
    };

    return this.reviewService.updateReview(params);
  }

  @Delete('/')
  @UseGuards(AuthGuard)
  async deleteReview(
    @Req() req: RequestWithToken,
    @Body() body: DeleteReviewDto,
  ): Promise<ResponseWithCode> {
    const { userId } = req.user;

    const user = await this.userService.getUserById({ userId });

    if (!user) {
      return {
        error: 'User not found',
        statusCode: 404,
      };
    }

    const review = await this.reviewService.getReviewById({ id: body.id });

    if (!review) {
      return {
        error: 'Review not found',
        statusCode: 404,
      };
    }

    if (review.userId !== userId) {
      return {
        error: 'User is not author',
        statusCode: 403,
      };
    }

    await this.reviewService.deleteReviewById({
      id: body.id,
    });

    return {
      message: 'Delete Review successfully',
      statusCode: 200,
    };
  }
}

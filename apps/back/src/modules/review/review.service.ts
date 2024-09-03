import { Injectable } from '@nestjs/common';
import { Review } from './review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateReviewDto, UpdateReviewDto } from 'src/dtos/review.dto';
import { v4 } from 'uuid';
import { UserId } from 'src/types/user';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private readonly reviewRepo: Repository<Review>,
  ) {}

  async getReviews(): Promise<Array<Review>> {
    const reviews = this.reviewRepo.find();
    return reviews;
  }

  async getReviewById(params: { id: string }): Promise<Review> {
    const review = await this.reviewRepo.findOne({
      where: {
        id: params.id,
      },
    });

    return review;
  }

  async deleteReviewById(params: { id: string }): Promise<DeleteResult> {
    const review = await this.reviewRepo.delete({
      id: params.id,
    });

    return review;
  }

  async createReview(params: CreateReviewDto & UserId): Promise<Review> {
    const review = await this.reviewRepo.save({
      id: v4(),
      ...params,
    });

    return review;
  }

  async updateReview(params: UpdateReviewDto): Promise<Review> {
    await this.reviewRepo.update(
      {
        id: params.id,
      },
      {
        title: params.title,
        contents: params.contents,
      },
    );

    const newReview = await this.getReviewById({ id: params.id });

    return newReview;
  }
}

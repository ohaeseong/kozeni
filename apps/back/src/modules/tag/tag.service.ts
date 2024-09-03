import { Injectable } from '@nestjs/common';
import { Review } from './tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private readonly reviewRepo: Repository<Review>,
  ) {}

  async getReviews(): Promise<Array<Review>> {
    const reviews = this.reviewRepo.find();
    return reviews;
  }
}

import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UpdateUserDto } from 'src/dtos/user.dto';
import { UpsertUser, UserId } from 'src/types/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async getUserById(params: UserId): Promise<User> {
    const user = this.userRepo.findOne({
      where: {
        id: params.userId,
      },
    });
    return user;
  }

  async updateUserById(params: UpdateUserDto & UserId): Promise<UpdateResult> {
    const { userId, ...newInput } = params;

    const user = this.userRepo.update({ id: userId }, { ...newInput });
    return user;
  }

  async deleteUserById(params: UserId): Promise<DeleteResult> {
    const user = this.userRepo.delete({ id: params.userId });

    return user;
  }

  async upsertUser(params: UpsertUser): Promise<User> {
    await this.userRepo.upsert(
      {
        ...params,
        name: params.userName,
      },
      ['id'],
    );

    const user = this.userRepo.findOne({
      where: {
        id: params.id,
      },
    });

    return user;
  }
}

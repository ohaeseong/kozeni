import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';
import { UpsertAuthParams } from 'src/types/auth';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private readonly authRepo: Repository<Auth>,
    private jwtService: JwtService,
  ) {}

  async upsertAuth(params: UpsertAuthParams): Promise<Auth> {
    const payload = { userId: params.id };
    const token = await this.jwtService.signAsync(payload);

    await this.authRepo.upsert(
      {
        ...params,
        token,
        refreshToken: token,
      },
      ['id'],
    );

    const auth = await this.authRepo.findOne({
      where: {
        id: params.id,
      },
    });

    return auth;
  }
}

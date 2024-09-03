import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './passports/google.strategy';
import { KakaoStrategy } from './passports/kakao.strategy';
import { AuthService } from './auth.service';
import { LineStrategy } from './passports/line.strategy';
import { Auth } from './auth.entity';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auth, User])],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    GoogleStrategy,
    KakaoStrategy,
    LineStrategy,
  ],
})
export class AuthModule {}

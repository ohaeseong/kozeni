import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserService } from 'src/modules/user/user.service';
import { AuthRequest } from 'src/dtos/request.dto';
import { UserProfile } from 'src/types/user';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: AuthRequest) {
    return await this.upsertAuthAndUser(req.user, 'google');
  }

  @Get('kakao')
  @UseGuards(AuthGuard('kakao'))
  async kakaoAuth() {}

  @Get('kakao/callback')
  @UseGuards(AuthGuard('kakao'))
  async kakaoAuthRedirect(@Req() req) {
    return this.upsertAuthAndUser(req.user, 'kakao');
  }

  @Get('line')
  @UseGuards(AuthGuard('line'))
  async lineAuth() {}

  @Get('line/callback')
  @UseGuards(AuthGuard('line'))
  async lineAuthRedirect(@Req() req) {
    return this.upsertAuthAndUser(req.user, 'line');
  }

  private async upsertAuthAndUser(
    userProfile: UserProfile,
    provider: 'google' | 'kakao' | 'line',
  ) {
    const { id, userName, profileImage, email } = userProfile;

    const user = await this.userService.upsertUser({
      id,
      userName,
      email,
      profileImage,
    });

    const auth = await this.authService.upsertAuth({
      id,
      provider,
      user,
    });

    return {
      ...user,
      token: auth.token,
      refreshToken: auth.refreshToken,
      provider: auth.provider,
    };
  }
}

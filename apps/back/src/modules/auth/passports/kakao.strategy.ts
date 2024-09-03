import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-kakao';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.KAKAO_AUTH_CLIENT_ID,
      clientSecret: process.env.KAKAO_AUTH_CLIENT_SECRET,
      callbackURL: `${process.env.HOST_ADDRESS}/auth/kakao/callback`,
      // scope: ['email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
  ) {
    const {
      id,
      username,
      _json: { kakao_account },
    } = profile;

    const user = {
      id,
      userName: username,
      email: kakao_account.email,
      profileImage: kakao_account.profile.profile_image_url,
      accessToken,
      refreshToken,
    };

    done(null, user);
  }
}

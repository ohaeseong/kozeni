import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-line';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LineStrategy extends PassportStrategy(Strategy, 'line') {
  constructor() {
    super({
      channelID: process.env.LINE_AUTH_CLIENT_ID,
      channelSecret: process.env.LINE_AUTH_CLIENT_SECRET,
      callbackURL: `${process.env.HOST_ADDRESS}/auth/line/callback`,
      scope: ['profile', 'openid', 'email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: {
      id: string;
      displayName: string;
      _json: {
        userId: string;
        displayName: string;
      };
    },
    done: (error: any, user?: any, info?: any) => void,
  ) {
    const { id, displayName } = profile;

    const user = {
      id,
      userName: displayName,
      email: null,
      profileImage: '',
      accessToken,
      refreshToken,
    };

    done(null, user);
  }
}

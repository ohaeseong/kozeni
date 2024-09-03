import { User } from 'src/modules/user/user.entity';

export interface UpsertAuthParams {
  id: string;
  pw?: string;
  user: User;
  provider: string;
}

export interface TokenPayload {
  userId: string;
  iat: number;
  exp: number;
}

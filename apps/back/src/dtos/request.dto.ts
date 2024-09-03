import { TokenPayload } from 'src/types/auth';
import { UserProfile } from 'src/types/user';

export class AuthRequest extends Request {
  user?: UserProfile;
}

export class RequestWithToken extends Request {
  user: TokenPayload;
}

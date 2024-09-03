import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { TokenPayload } from 'src/types/auth';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(15)
  name: string;

  @IsEmail()
  @IsString()
  email?: string;

  @IsString()
  profileImage?: string;

  @IsString()
  lineId?: string;

  @IsString()
  kakaoId?: string;

  user: TokenPayload;
}

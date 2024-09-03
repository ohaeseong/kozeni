import {
  Body,
  Controller,
  Delete,
  Get,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { RequestWithToken } from 'src/dtos/request.dto';
import { Response } from 'src/dtos/response.dto';
import { UpdateUserDto } from 'src/dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  @UseGuards(AuthGuard)
  async getUser(@Req() req: RequestWithToken): Promise<Response<User>> {
    const { userId } = req.user;

    const user = await this.userService.getUserById({ userId });

    if (!user) {
      return {
        statusCode: 404,
        message: '존재하지 않는 유저입니다.',
      };
    }

    return {
      statusCode: 200,
      message: '유저 가져오기 성공',
      body: user,
    };
  }

  @Put('/')
  @UseGuards(AuthGuard)
  async updateUser(
    @Req() req: RequestWithToken,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<Response<User>> {
    const { userId } = req.user;

    const user = await this.userService.getUserById({ userId });

    if (!user) {
      return {
        statusCode: 404,
        message: '존재하지 않는 유저입니다.',
      };
    }

    const updateInput = {
      ...updateUserDto,
      userId: userId,
    };

    await this.userService.updateUserById(updateInput);

    return {
      statusCode: 200,
      message: '유저 정보 수정 성공',
    };
  }

  @Delete('/')
  @UseGuards(AuthGuard)
  async deleteUser(@Req() req: RequestWithToken): Promise<Response<User>> {
    const { userId } = req.user;

    const user = await this.userService.getUserById({ userId });

    if (!user) {
      return {
        statusCode: 404,
        message: '존재하지 않는 유저입니다.',
      };
    }

    await this.userService.deleteUserById({ userId });

    return {
      statusCode: 200,
      message: '유저 탈퇴 성공',
    };
  }
}

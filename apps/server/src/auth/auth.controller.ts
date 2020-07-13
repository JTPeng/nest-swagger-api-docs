import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';

import { ReturnModelType } from '@typegoose/typegoose';
import { Client, ClientDocument } from '@libs/db/model/client.model';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { RegisterDto } from './dto/register.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/login.dto';

import { JwtService } from '@nestjs/jwt';
import { CurrentClient } from './current-client.decorator';

@Controller('auth')
@ApiTags('用户')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    @InjectModel(Client) private readonly clientModel: ReturnModelType<typeof Client>
  ) { }

  @Post('register')
  @ApiOperation({ summary: '注册' })
  async register(@Body() dto: RegisterDto) {
    const { username, password } = dto
    // create创建数据, 或者实例化model在调用实例化对象的save方法
    const user = await this.clientModel.create({
      username,
      password
    })
    return user
  }

  @Post('login')
  @ApiOperation({ summary: '登录' })
  @UseGuards(AuthGuard('local'))  // local要和配置的本地策略中的命名保持一致
  async login(@Body() dto: LoginDto, @CurrentClient() user: ClientDocument) {
    return {
      token: this.jwtService.sign(String(user._id))
    }
  }

  @Get('client')
  @ApiOperation({ summary: '查看用户信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth() // 表示当前接口需要传递token
  async user(@CurrentClient() user: ClientDocument) {
    return user
  }
}
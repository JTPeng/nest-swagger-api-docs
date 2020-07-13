/**
 * local 本地策略配置
*/
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { Client } from '@libs/db/model/client.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { IStrategyOptions, Strategy } from 'passport-local';
import { BadRequestException } from '@nestjs/common';
import { compareSync } from 'bcryptjs';

export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(@InjectModel(Client) private clientModel: ReturnModelType<typeof Client>) {
    super({ usernameField: 'username', passwordField: 'password' } as IStrategyOptions)
  }

  // 本地策略验证
  async validate(username: string, password: string) {
    const user = await this.clientModel.findOne({ username }).select('+password')
    if (!user) {
      throw new BadRequestException('username not correct! ')
    }

    if (!compareSync(password, user.password)) {
      throw new BadRequestException('password not correct!')
    }

    return user
  }
}
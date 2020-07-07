import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/model/user.model';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: User
})
@Controller('user')
@ApiTags('用户')
export class UserController {
  constructor(@InjectModel(User) private readonly model) { }
}

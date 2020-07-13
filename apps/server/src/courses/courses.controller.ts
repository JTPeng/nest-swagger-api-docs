import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { Course } from '@libs/db/model/course.model';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Course,
  routes: {
    update: false,
    create: false,
    delete: false
  }
})
@Controller('courses')
@ApiTags('课程')
export class CoursesController {
  constructor(@InjectModel(Course) private model) { }
}

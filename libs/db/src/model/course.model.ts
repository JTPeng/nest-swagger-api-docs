import { Prop } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";

export class Course {
  @ApiProperty({ description: '课程名称', example: 'courseName' })
  @Prop()
  name: string

  @ApiProperty({ description: '课程封面图', example: 'coverPicture' })
  @Prop()
  cover: string
}
import { prop, modelOptions, DocumentType } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";
import { hashSync } from "bcryptjs";

export type ClientDocument = DocumentType<Client>

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Client {
  @ApiProperty({ description: '用户名', example: 'string' })
  @prop()
  username: string

  @ApiProperty({ description: '密码', example: 'string' })
  @prop({
    select: false,
    set(val) {
      return val ? hashSync(val) : ''  // 使用hash哈希散列对密码进行加密
    },
    get(val) {
      return val
    }
  })
  password: string
}
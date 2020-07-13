import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './model/user.model';
import { Client } from './model/client.model';
import { Course } from './model/course.model';


const models = TypegooseModule.forFeature([User, Client, Course])
@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/topfullstack', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DbModule } from '@libs/db';
import { CommonModule } from '@app/common';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [AuthModule, CommonModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

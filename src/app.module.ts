import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudController } from './crud/crud.controller';
//import { CrudService } from './crud/crud.service';
import { CrudModule } from './crud/crud.module';
import {MongooseModule} from '@nestjs/mongoose'
//import {studentschema} from './crud/crud.model'
//import {studentmodel} from './crud/crud.model'

@Module({
  imports: [AppModule,CrudModule,MongooseModule.forRoot("mongodb://localhost:27017/mydb")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import {studentmodel} from './crud.model'
import { Module } from '@nestjs/common';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';
import {MongooseModule} from '@nestjs/mongoose'
import {studentschema} from './crud.model'
import * as mongoose from 'mongoose'
import {model,Model} from 'mongoose'

@Module({
    imports:[CrudModule,MongooseModule.forFeature([{
        name:'student',schema:studentschema,collection:"students"
    }])],
    controllers:[CrudController],
    providers:[CrudService]
})
export class CrudModule {}

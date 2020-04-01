import { Controller, Body, Post, Get, Put,Param, Delete } from '@nestjs/common';
import { CrudService } from './crud.service';
import {studentmodel} from './crud.model'
import { identity } from 'rxjs';

@Controller('crud')
export class CrudController {
    constructor(private readonly crudservice:CrudService){}
    @Post('add')
    add(@Body('name')name:string,@Body('std')std:string,@Body('rollno')rollno:string,@Body('section')section:string){
        return this.crudservice.insert(name,std,rollno,section)
    }
    @Get('fetch')
    fetch(){
        return this.crudservice.fetch();
    }
    @Get('fetch_one/"rollno')
    fetch_one(@Param()rollno): Promise<studentmodel[]>{
        return this.crudservice.find(rollno)
    }
    @Put(':id')
    update(@Param('id')id:string,@Body()datamodel:studentmodel){
        return this.crudservice.update(id,datamodel)
    }
    @Delete("delete:id")
    delete(@Param('id')id){
        return this.crudservice.delete(id)
    }
}

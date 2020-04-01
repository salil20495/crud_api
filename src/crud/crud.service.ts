import { Injectable } from '@nestjs/common';
import {model,Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import {studentschema} from './crud.model'
import {studentmodel} from './crud.model'
@Injectable()
export class CrudService {
    //constructor(injectModel('student') private readonly  studentmodel:Model<studentinterface>){}
    constructor(@InjectModel('student') private readonly student:Model<studentmodel>){}
    
    async insert(name:string,std:string,rollno:string,section:string){
        const add_student=new this.student({name,std,rollno,section})
        await add_student.save();
        return "data saved successfully"
    }
    async fetch(){
        const get_student=this.student.find().exec()
        return get_student
    }
    async find_one(id): Promise<studentmodel> {
        const student_entry=await this.student.findById(id).exec();
        if(!student_entry){
            console.log("entry not found");
        }
        else{
            return student_entry
            console.log("entry found")
        }
    }
    async update(id,datamodel:studentmodel){
        await this.student.findByIdAndUpdate(id,datamodel,{new:true})
        return "entry updated successfully"
    }
    async delete(id:any){
        await this.student.findByIdAndRemove(id)
        //console.log("entery deleted successfully")
        return "entry deleted successfully"
    }
}

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
    async find(rollno): Promise<studentmodel[]> {
        return await this.student.find({name:rollno.name}).exec();
    }
    async update(id,datamodel):Promise<studentmodel>{
        const result= await this.student.findByIdAndUpdate(id,datamodel)
        if(result){
            return result
        }
        else{
            console.log("error")
            
        }
    }
    // async delete(id){
    //     const student_dlt=this.student.findByIdAndRemove(id)
    //     return "entry deleted successfully"
    // }
    async delete(id){
        const delete_data=this.student.deleteOne({name:id.name})
        return "entry deleted successfully"
    }
}

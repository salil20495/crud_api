import * as mongoose from 'mongoose'

export const studentschema=new mongoose.Schema({
    name:{type:String},
    std:{type:Number},
    rollno:{type:Number},
    section:{type:String}
});
    
export interface studentmodel  extends mongoose.Document{
   readonly name:string,
   readonly std:Number,
   readonly rollno:Number,
   readonly section:string
}





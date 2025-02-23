import mongoose from 'mongoose'


const taskSchema = new mongoose.Schema({
    taskName:{type:String,required:true},
    taskDescription:{type:String,required:true},
    taskDate:{type:Date,required:true},
    taskPriority:{type:String,required:true},
    taskStatus:{type:String,required:true}
})

const taskModel = mongoose.model("Task",taskSchema)

export default taskModel
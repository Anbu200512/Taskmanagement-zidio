import taskModel from "../schemas/task.Schema.js"
import message from "../utils/message.js"


const getAllTask = async (req,res) =>{
    try{
        const tasks = await taskModel.find()
        if(tasks){
            return res.json(tasks)
        }
    }catch(err){
        return message(res,400,false,err.message)
    }
}

const getSingleTask = async (req,res) =>{
    const {taskId} = req.params
    try{

        const task = await taskModel.findById(taskId)
        if(task){
            return res.json(task)
        }
    }catch(err){
        return message(res,400,false,err.message)
    }
}

const createTask = async (req,res) =>{
    const {taskName,taskDescription,taskDate,taskPriority,taskStatus} = req.body

    if(!taskName || !taskDescription || !taskDate || !taskPriority || !taskStatus){
        return message(res,400,false,"Please set all the fields")
    }

    try{

        const newTask = new taskModel({
            taskName,
            taskDescription,
            taskDate,
            taskPriority,
            taskStatus
        })

        await newTask.save()
        return message(res,200,true,"new task created")

    }catch(err){
        return message(res,400,false,err.message)
    }
}


const editTask = async (req,res) =>{
    const {taskName,taskDescription,taskDate,taskPriority,taskStatus} = req.body
    const {taskId} = req.params
    try{
        const task = await taskModel.findByIdAndUpdate(taskId,{taskName,taskDescription,taskDate,taskPriority,taskStatus})
        await task.save()
        return message(res,200,true,"edited successFull")
    }catch(err){
        return message(res,400,false,err.massage)
    }
}

const deleteTask = async (req,res)=>{
    const {taskId} = req.params
    try{

        const task = await taskModel.findByIdAndDelete(taskId)

        if(task){
           await task.save()
        }

    }catch(err){
        return message(res,400,false,err.message)
    }
}

export {createTask,getAllTask,getSingleTask,editTask,deleteTask}
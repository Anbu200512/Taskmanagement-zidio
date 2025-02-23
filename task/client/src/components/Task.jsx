import React from 'react'

import {FaEdit,FaTrash} from "react-icons/fa"
import{Link} from "react-router-dom"
import { mainContext } from '../context/Context'

const Task = () => {
  const {task,getSingleTask,deleteOneTask} = mainContext()

  return (
      task.map((task,i)=>{
        const {taskName,taskDescription,taskDate,taskPriority,taskStatus,_id} = task
        return(
        <div key={i} className='p-4 rounded shadow shadow-gray-600 flex flex-col gap-4 font-mono'>
          <b className='uppercase'>TaskName : <span className='capitalize'>{taskName}</span></b>
          <b className='uppercase'>TaskDes : <span className='capitalize'>{taskDescription}</span></b>
          <b className='uppercase'>TaskDate : <span className='capitalize'>{taskDate}</span></b>
          <b className='uppercase'>TaskLevel : <span className='capitalize'>{taskPriority}</span></b>
          <b className='uppercase'>TaskStatus : <span className='capitalize'>{taskStatus}</span></b>
          <div className='flex gap-3 items-center justify-center'>
            <Link to={`/edit-task/:${_id}`} onClick={()=>getSingleTask(_id)}><FaEdit className='text-2xl text-green-500'/></Link>
            <button onClick={()=>deleteOneTask(_id)} className='text-2xl text-red-500 cursor-pointer'><FaTrash/></button>
          </div>
        </div>
        )
      })
  )
}

export default Task

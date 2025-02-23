import React, { useState, useEffect } from 'react';
import { mainContext } from '../context/Context';

const CreateTask = () => {

  const {createTaskData,createTask,setCreateTask} = mainContext()

  const [timer, setTimer] = useState(600); 
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateTask({...createTask,[name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTaskData()
    setTimer(600); 
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h2 className='text-center uppercase my-5 font-semibold text-3xl'>Create Task</h2>
      
      <form onSubmit={handleSubmit} className='w-1/2 p-4 rounded shadow shadow-gray-700 mx-auto flex flex-col gap-3 mb-12'>
        <div>
          <label className='uppercase font-semibold block my-2'>Title</label>
          <input
            type="text"
            name="taskName"
            onChange={handleChange}
            placeholder="Enter task title"
            required 
            className='outline-none border-2 border-black rounded w-full p-3'
          />
        </div>
        <div>
          <label className='uppercase font-semibold block my-2'>Description</label>
          <textarea
            name="taskDescription"
            onChange={handleChange}
            placeholder="Enter task description"
            required 
            className='outline-none border-2 border-black rounded w-full p-3'
          />
        </div>
        <div>
          <label className='uppercase font-semibold block my-2'>Date</label>
          <input
            type="date"
            name="taskDate"
            onChange={handleChange}
            required
            className='outline-none border-2 border-black rounded w-full p-3'
          />
        </div>
        <div>
          <label>Priority</label>
          <select
            name="taskPriority"
            onChange={handleChange}
            required
            className='outline-none border-2 border-black rounded w-full p-3'
          >
            <option value="">Select priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <label className='uppercase font-semibold block my-2'>Status</label>
          <select
            name="taskStatus"
            onChange={handleChange}
            required 
            className='outline-none border-2 border-black rounded w-full p-3'
          >
            <option value="">Select status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        
        <div className="w-full">
          <p>Time Remaining: {formatTime(timer)}</p>
        </div>
        <button type="submit" onClick={handleSubmit} className='uppercase block w-[200px] cursor-pointer mx-auto bg-green-400 p-3 rounded font-semibold text-white'>Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;

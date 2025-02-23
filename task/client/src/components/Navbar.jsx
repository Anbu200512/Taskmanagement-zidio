import React from 'react'
import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom"
import { mainContext } from '../context/Context';


const Navbar = () => {
  const {verifyUser,getVerifyUser} = mainContext()

  const verify = ()=>{
    getVerifyUser()
    console.log(verifyUser);
  }

  return (
    <nav className='flex justify-between items-center px-16 py-3 bg-purple-800 text-white'>
        <div>
            <Link to={"/"} className='text-3xl font-semibold'>TASK</Link>
        </div>
        <div className='flex items-center gap-2 px-4 py-3 rounded bg-white text-black'>
            <FaSearch/>
            <input type="text" placeholder='Search...' className='outline-none'/>
        </div>
        <div className='flex gap-4'>
            <Link to={"/create-task"} className='uppercase font-semibold'>add task</Link>
            <Link to={"/signin"} className='uppercase font-semibold'>signin</Link>
            <button onClick={verify}>verify</button>
        </div>
    </nav>
  )
}

export default Navbar

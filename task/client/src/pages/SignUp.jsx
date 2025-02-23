import React, { useContext, useState } from 'react'

import {Link, useNavigate} from "react-router-dom"
import { mainContext } from '../context/Context'

const SignUp = () => {

  const [formData,setFormData] = useState({})

  const {signUp,userData} = mainContext()

  const nav = useNavigate()

  const handleInp = (e) =>{
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    signUp(formData)
    console.log(userData);
    
  }

  return (
    <div className='my-10'>
      <form onSubmit={handleSubmit} className='w-[40%] mx-auto flex flex-col gap-4 shadow shadow-gray-500 p-5 rounded'>
      <h1 className='uppercase font-extrabold text-center my-4 text-3xl'>signup</h1>
      <input name='name' onChange={handleInp} type="text" placeholder='UserName' className='outline-none px-5 py-3 border-2 border-black rounded'/>
        <input name='email' onChange={handleInp} type="email" placeholder='Email' className='outline-none px-5 py-3 border-2 border-black rounded'/>
        <input name='password' onChange={handleInp} type="password" placeholder='Password' className='outline-none px-5 py-3 border-2 border-black rounded'/>
        <b className='uppercase text-[13px]'>already have account ? <Link to={"/signin"} className='text-blue-600'>signIn</Link></b>
        <button onClick={handleSubmit} className='p-4 cursor-pointer bg-purple-800 uppercase text-white font-semibold rounded'>signUp</button>
      </form>
    </div>
  )
}

export default SignUp

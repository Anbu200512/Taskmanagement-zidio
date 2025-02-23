import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

import Home from './pages/Home'
import EditTask from './pages/EditTask'
import CreateTask from './pages/NewTask'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit-task/:taskId' element={<EditTask/>}/>
          <Route path='/create-task' element={<CreateTask/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Toaster
      position="top-center"
      reverseOrder={false}
      />
    </BrowserRouter>
  )
}

export default App

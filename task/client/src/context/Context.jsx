import { createContext, useContext, useEffect, useState } from "react"
import toast from 'react-hot-toast'
export const AppContext = createContext()


const ContextProvider = ({children}) =>{

   const [task,setTask] = useState([]) 
   const [singleTask,setSingleTask] = useState({})
   const [createTask,setCreateTask] = useState({})
   const [message,setMessage] = useState(null)


   const [userData,setUserData] = useState({})
   const [verifyUser,setVerifyUser] =useState({})


   const signUp = async(userData)=>{
    const res = await fetch("http://localhost:8000/auth/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(userData)
    })
    const data = await res.json()
    setUserData(data)
   }

   const signIn = async(userData)=>{
    const res = await fetch("http://localhost:8000/auth/signin",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(userData)
    })
    const data = await res.json()
    setUserData(data)
   }

   const getVerifyUser = async()=>{
    const res = await fetch("http://localhost:8000/auth/verify-user",{
        
    })
    const data = await res.json()
    console.log(data);
    setVerifyUser(data)
   }


   const getAllTask = async () =>{
    const res = await fetch('http://localhost:8000/task/all-task')
    const data = await res.json()
    setTask(data)
   }

   const getSingleTask = async (taskId) =>{
    const res = await fetch(`http://localhost:8000/task/single-task/${taskId}`)
    const data = await res.json()
    setSingleTask(data)
   }


   const createTaskData = async () =>{
    const res = await fetch('http://localhost:8000/task/create-task',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(createTask)
    });
    const data = await res.json()
    setMessage(data)
    if(data.success){
        toast.success('task created')
        window.location.pathname='/';
        Window.location.reload()
    }
   }

   const editTaskData = async (taskId) =>{
    const res = await fetch(`http://localhost:8000/task/edit-task/${taskId}`,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(singleTask)
    })
    const data = await res.json()
    setTask(data)
    if(data.success){
        toast.success("task has been edited")
        window.location.pathname= "/"
        Window.location.reload()
    }
   }

   const deleteOneTask = async (taskId) =>{
    const res = await fetch(`http://localhost:8000/task/delete-one-task/${taskId}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
    })
    const data = await res.json()
    toast.error("task has deleted")
    window.location.reload()
   }


   useEffect(()=>{
    getAllTask()
   },[])


    const value ={
        createTask,setCreateTask,createTaskData,
        getAllTask,task,
        singleTask,getSingleTask,setSingleTask,
        editTaskData,deleteOneTask,
        userData,signUp,signIn,
        getVerifyUser,verifyUser,setVerifyUser
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const mainContext  = () => useContext(AppContext)
export default ContextProvider


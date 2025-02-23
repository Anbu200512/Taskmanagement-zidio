import React from 'react'
import Task from '../components/Task'
import Filters from '../components/Filters'

const Home = () => {
  return (
    <div className='flex gap-4'>
      <Filters/>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 p-4'>
      <Task/>
      </div>
    </div>
  )
}

export default Home

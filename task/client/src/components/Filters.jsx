import React from 'react'

const Filters = () => {
  return (
    <div className='flex flex-col gap-5 p-5 w-[20%]'>
      <div>
      <select className='outline-none px-5 py-3 border-2 border-black rounded w-full'>
          <option value="" selected>High</option>
          <option value="">low</option>
          <option value="">medium</option>
        </select>
      </div>
      <div className='flex gap-3'>
        <button className='w-[200px] text-white cursor-pointer bg-green-500 p-3 rounded uppercase font-semibold text-[13px]'>completed</button>
        <button className='w-[200px] text-white cursor-pointer bg-red-500 p-3 rounded uppercase font-semibold text-[13px]'>pending</button>
      </div>
    </div>
  )
}

export default Filters

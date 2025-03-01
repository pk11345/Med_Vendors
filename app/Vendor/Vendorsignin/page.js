'use client'
import React from 'react'

const page = () => {
  return (
    <>
      
      <form className='w-[450px] h-[400px] bg-white my-8 mx-auto rounded-lg shadow-sm'>
      <h1 className='text-center bg-blue-300 h-8 text-white py-0.5 font-bold rounded-t-lg shadow-sm'>Vendor Signin Form</h1>
      <div className='flex my-12 px-2 w-full'>
      <p className='flex-1 text-center text-blue-400 font-semibold'>Name</p>
      <input type='text' placeholder='Raju Verma' className='flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400'></input>
      </div>
      <div className='flex my-12 px-2 w-full'>
      <p className='flex-1 text-center text-blue-400 font-semibold'>Contact</p>
      <input type='text' placeholder='9999999999' className='flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400'></input>
      </div>
      <div className='flex my-12 px-2 w-full'>
      <p className='flex-1 text-center text-blue-400 font-semibold'>Password</p>
      <input type='text' placeholder='*****' className='flex-1 text-center mx-2 bg-blue-50 focus:outline-blue-400 text-blue-400'></input>
      </div>
      <div className='flex w-full justify-center my-[60px]'>
      <button className='text-center bg-blue-400 px-2 py-1 rounded text-white'>Signin</button>
      </div>
      </form>
    </>
    
  )
}

export default page

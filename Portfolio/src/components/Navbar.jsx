import React from 'react'
import { useState} from 'react'
function Navbar() {
  return (
    <div className='h-16 w-full flex flex-row p-6 '>
      <div className='w-1/2 text-center text-4xl font-semibold'>Karan Singh </div>
      <div className='w-1/2 flex flex-row justify-evenly text-semibold pt-2 text-base font-medium'>
          <a href='#About' className=' hover:underline'>About</a>
          <a href="#Skills" className=' hover:underline'>Skills</a>
          <a href='#Projects' className=' hover:underline'>Projects</a>
          <a href='#Contact' className=' hover:underline'>Contact Us</a>
      </div>
    </div>
  )
}

export default Navbar
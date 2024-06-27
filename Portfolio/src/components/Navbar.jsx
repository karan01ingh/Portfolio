import React from 'react'
import { useState} from 'react'
function Navbar() {
  return (
    <div className='h-16 w-full flex flex-row p-6'>
      <div className='text-2xl w-1/2 text-center font-semibold'>Karan Singh Manral</div>
      <div className='w-1/2 flex flex-row justify-evenly text-semibold pt-2 text-base font-medium'>
          <a href='#About'>About</a>
          <a href="#Skills">Skills</a>
          <a href='#Experience'>Experience</a>
          <a href='#Projects'>Projects</a>
          <a href='#Contact'>Contact Us</a>
      </div>
    </div>
  )
}

export default Navbar
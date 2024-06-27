import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='h-auto w-dvw'>
      <Navbar/>
      {/* Home Page */}
      <div className='h-screen w-full bg-red-400 flex flex-row bg-green-200 text-center '>
        {/* image portion */}
        <div className='bg-orange-400 w-1/2 flex flex-row justify-end items-center pr-3'>
          <img src="https://images.unsplash.com/photo-1674082340246-8e99af96b10b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGh0b3Nob290fGVufDB8fDB8fHww" alt="Something is wrong"  className='h-56 w-56 rounded-full object-cover'/>
        </div>
        {/* dusra portion */}
        <div className='flex flex-col justify-center items-start pl-3'>
          <div>
             <p>Hello, I'm</p>
             <h1 className='text-4xl font-semibold mt-2'>Karan Singh</h1>
             <h1 className='text-lg font-medium mt-2'>Software Developer</h1>
          <div>
           <button className='h-auto w-auto rounded-full border-2 p-2 text-xs font-medium border-zinc-950 mt-2 mr-2'>Download CV</button>
           <button className='h-auto w-auto rounded-full border-2 border-zinc-950 p-2 text-xs font-medium text-white bg-zinc-950 mt-3 ml-2'>Contact Info</button>
          </div>
          <div className='flex flex-row justify-center mt-3'>
            <img src="https://cdn-icons-png.flaticon.com/128/3669/3669739.png" alt="retry" className='h-6 w-6 mr-2' />
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="retry" className='h-6 w-6 ml-2'/>
          </div>
          </div>
        </div>
      </div>
      {/* About section */}
      <div className='h-screen w-full bg-pink-400 flex flex-col text-center items-center justify-center justify-around p-10' id='About'>
        <div className='text-center bg-gray-400 h-1/5'>
           <p className='text-lg font-medium text-zinc-900'>Get To Know More</p>
           <h1 className='text-5xl font-semibold text-zinc-950'>About me </h1>
        </div>
        <div className='flex flex-row w-full h-4/5  bg-blue-500'>
          <div className='h-full w-1/3 bg-black-300 flex flex-row justify-end items-end pt-14 pl-14 pb-14'>
              <img src="https://images.pexels.com/photos/5756484/pexels-photo-5756484.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full rounded-md' />
          </div>
          <div className='h-full w-3/4 bg-red-400 flex flex-col justify-center items-center p-14'>
              <div className='w-full h-2/5 flex flex-row justify-around'>
                  <div className='h-full w-3/5 border-2 border-zinc-950 rounded-lg ml-16 mr-5 p-3 flex flex-col items-center'>
                  <img src="https://cdn-icons-png.flaticon.com/128/9232/9232084.png" alt=""  className='h-10 w-10'/>
                  <h1 className='text-2xl font-semibold text-zinc-950'>Education</h1>
                  <p className='text-lg font-normal font-sans text-zinc-900'>B.Tech Bachelors Degree</p>
                  <p className='text-lg font-normal font-sans text-zinc-900'>
                    M.Tech Masters Degree
                  </p>
                  </div>
                  <div className='h-full w-3/5 border-2 border-zinc-950 rounded-lg mr-16 ml-5 p-3 flex flex-col items-center'>
                  <img src="https://cdn-icons-png.flaticon.com/128/8743/8743903.png" alt="" className='h-10 w-10'/>
                  <h1 className='text-2xl font-semibold text-zinc-950'>Experience</h1>
                  <p className='text-lg font-normal font-sans text-zinc-900'>2+ Years</p>
                  <p className='text-lg font-normal font-sans text-zinc-900'>FullStack Development </p>
                  </div>
              </div>
              <div className='w-4/5 h-2/5 border-2 border-zinc-950 rounded-lg flex flex-row justify-center items-center font-sans text-zinc-900 text-lg'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quidem quaerat vitae eos nihil, reprehenderit, perferendis fugit non repellat harum rem quisquam. Amet eaque quam laboriosam quas suscipit vel eligendi!Lorem
              </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className='h-screen w-full bg-yellow-300' id='Skills'></div>
    </div>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='h-auto w-dvw'>
      <Navbar/>
      {/* Home Page */}
      <div className='h-screen w-full bg-red-400 flex flex-row bg-green-200 text-center ' id='Home'>
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
           <button className='h-auto w-auto rounded-full border-2 p-2 text-xs font-medium border-zinc-950 mt-2 mr-2 hover:bg-zinc-950 hover:text-white  transition duration-300 ease-in-out'>Download CV</button>
           <button className='h-auto w-auto rounded-full border-2 border-zinc-950 p-2 text-xs font-medium text-white bg-zinc-950 mt-3 ml-2 hover:bg-white hover:text-zinc-950'>Contact Info</button>
          </div>
          <div className='flex flex-row justify-center mt-3'>
            <img src="https://cdn-icons-png.flaticon.com/128/3669/3669739.png" alt="retry" className='h-6 w-6 mr-2' />
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="retry" className='h-6 w-6 ml-2'/>
          </div>
          </div>
        </div>
      </div>
      {/* About section */}
      <div className='h-screen w-full  flex flex-col text-center items-center justify-center justify-around p-10 bg-blue-500' id='About'>
        <div className='text-center  h-1/5'>
           <p className='text-lg font-medium text-zinc-900'>Get To Know More</p>
           <h1 className='text-5xl font-semibold text-zinc-950'>About me </h1>
        </div>
        <div className='flex flex-row w-full h-4/5 '>
          <div className='h-full w-1/3  flex flex-row justify-end items-end pt-14 pl-14 pb-14'>
              <img src="https://images.pexels.com/photos/5756484/pexels-photo-5756484.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-full rounded-md' />
          </div>
          <div className='h-full w-3/4  flex flex-col justify-center items-center p-14'>
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
              <div className='w-4/5 h-2/5  flex flex-row justify-center items-center font-sans text-zinc-900 text-lg'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quidem quaerat vitae eos nihil, reprehenderit, perferendis fugit non repellat harum rem quisquam. Amet eaque quam laboriosam quas suscipit vel eligendi!Lorem
              </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className='h-screen w-full  flex flex-col pt-10 justify-center items-center bg-green-300'  id='Skills'>
        <h1 className='h-1/4'>
          <p className='text-lg font-medium text-zinc-900 text-center'>Explore My </p>
          <p className='text-5xl font-semibold text-zinc-950 text-center'>Skills</p>
        </h1>
        {/* <div className='w-4/5 h-1/4'>
          <div className='border-2 border-zinc-950 rounded-lg w-2/5 h-full p-5 text-center'>
             <h1 className='text-2xl font-semibold '>FrontEnd Development</h1>
             <div className='flex flex-row w-full h-full '>
              <div className=' flex flex-col justify-center justify-evenly w-1/2 text-lg  font-medium font-sans'>
                <h1>HTML</h1>
                <h1>JavaScript</h1>
                <h1>TypeScript</h1>
              </div>
              <div className=' flex flex-col justify-center justify-evenly w-1/2 text-lg font-medium font-sans'>
              <h1>CSS</h1>
                <h1>ReactJs</h1>
                <h1>NextJs</h1>
              </div>
             </div>
          </div>
          <div>

          </div>
        </div> */}
        <div className='h-80 w-3/5 border-2 border-zinc-950 bg-zinc-900 flex flex-col rounded-lg'>
        <div className='h-36 w-full p-2 flex flex-row'>
        <div className='h-full w-1/5 m-2'>
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="" className='hover:scale-105' />
        </div>
        <div className='h-full w-1/5 m-2'>
        <img src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="" className='hover:scale-105' />
        </div>
        <div className='h-full w-1/5 m-2'>
        <img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="" className='hover:scale-105'/>
        </div>
        <div className='h-full w-1/5 m-2'>
        <img src="https://cdn-icons-png.flaticon.com/128/760/760457.png" alt="" className='hover:scale-105'/>
        </div>
        <div className='h-full w-1/5 m-2'>
        <img src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="" className='hover:scale-105'/>
        </div>
        </div>
        <div className='h-36 w-full p-2 flex flex-row'>
        <div className='h-full w-1/5 m-2'>
        <img src="https://cdn-icons-png.flaticon.com/128/6132/6132222.png" alt="" className='hover:scale-105'/>
        </div>
        <div className='h-full w-1/5 m-2'>
        <img src="https://cdn-icons-png.flaticon.com/128/3098/3098090.png" alt="" className='hover:scale-105' />
        </div>
        <div className='h-full w-1/5 m-2'>
        <img src="" alt="" />
        </div>
        <div className='h-full w-1/5 m-2'></div>
        <div className='h-full w-1/5 m-2'></div>
        </div>
        </div>
      </div>
      {/* Projects */}
      <div className='h-screen w-full flex flex-col pt-5 justify-center items-center bg-pink-500' id='Projects'>
      <h1 className='h-1/4'>
          <p className='text-lg font-medium text-zinc-900 text-center'>Browse My Recents </p>
          <p className='text-5xl font-semibold text-zinc-950 text-center'>Projects</p>
        </h1>
        <div className='w-full h-2/3 bg-green-500 flex flex-row justify-around p-10'>
        <div className='h-full w-1/5 m-2 bg-orange-400 p-5 rounded-3xl border-2 border-zinc-600'>
        <img src="https://cdn.pixabay.com/photo/2018/01/30/06/01/timeline-3117957_640.jpg" alt="" className='rounded-3xl h-1/2 w-full hover:shadow-2xl  transition ease-in-out hover:scale-110'/>
        <div className='text-2xl font-sans text-medium font-semibold text-zinc-900 p-1 text-center'>Title</div>
        <h1 className='font-semibold text-zinc-900'>Descreption-</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab saepe quibus</h2>
        <div className='flex flex-row justify-center justify-around pt-5'>
          
          <button className=' w-24 border-2 border-zinc-800 p-1 rounded-full text-sm hover:bg-zinc-900 hover:text-white transition duration-300 ease-in-out'><a href="https://github.com/karan01ingh/Portfolio">Github</a></button>
          <button className=' w-24 border-2 border-zinc-800 p-1 rounded-full text-sm hover:bg-zinc-900 hover:text-white transition duration-300 ease-in-out'><a href="">Live Demo</a></button>
        </div>

        </div>
        <div className='h-full w-1/5 m-2 bg-orange-400 rounded-3xl p-5 border-2 border-zinc-600 flex flex-col'>
        <img src="https://cdn.pixabay.com/photo/2019/12/14/07/21/document-4694351_640.png" alt="" className='rounded-3xl h-1/2 w-full hover:shadow-2xl transition ease-in-out hover:scale-110'/>
        <div className='text-2xl font-sans text-medium font-semibold text-zinc-900 p-1 text-center'>Title</div>
        <h1 className='font-semibold text-zinc-900'>Descreption-</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab saepe quibus</h2>
        <div className='flex flex-row justify-center justify-around pt-5'>
          
          <button className=' w-24 border-2 border-zinc-800 p-1 rounded-full text-sm hover:bg-zinc-900 hover:text-white transition duration-300 ease-in-out'><a href="https://github.com/karan01ingh/Portfolio">Github</a></button>
          <button className=' w-24 border-2 border-zinc-800 p-1 rounded-full text-sm hover:bg-zinc-900 hover:text-white transition duration-300 ease-in-out'><a href="">Live Demo</a></button>
        </div>
        </div>
        <div className='h-full w-1/5 m-2 bg-orange-400 rounded-3xl p-5 border-2 border-zinc-600'>
        <img src="https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png" alt="" className='rounded-3xl h-1/2 w-full hover:shadow-2xl transition ease-in-out hover:scale-110'/>
        <div className='text-2xl font-sans text-medium font-semibold text-zinc-900 p-1 text-center'>Title</div>
        <h1 className='font-semibold text-zinc-900'>Descreption-</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab saepe quibus</h2>
        <div className='flex flex-row justify-center justify-around pt-5'>
          
          <button className=' w-24 border-2 border-zinc-800 p-1 rounded-full text-sm hover:bg-zinc-900 hover:text-white transition duration-300 ease-in-out'><a href="https://github.com/karan01ingh/Portfolio">Github</a></button>
          <button className=' w-24 border-2 border-zinc-800 p-1 rounded-full text-sm hover:bg-zinc-900 hover:text-white transition duration-300 ease-in-out'><a href="">Live Demo</a></button>
        </div>

        </div>
        <div className='h-full w-1/5 m-2 bg-orange-400 rounded-3xl p-5 border-2 border-zinc-600'>
        <img src="https://cdn.pixabay.com/photo/2023/11/04/10/35/woman-8364633_640.jpg" alt="" className='rounded-3xl h-1/2 w-full object-contain hover:shadow-2xl transition ease-in-out hover:scale-110 '/>
        <div className='text-2xl font-sans text-medium font-semibold text-zinc-900 p-1 text-center'>Title</div>
        <h1 className='font-semibold text-zinc-900'>Descreption-</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab saepe quibus</h2>
        <div className='flex flex-row justify-center justify-around pt-5'>
          
          <button className=' w-24 border-2 border-zinc-800 p-1 rounded-full text-sm hover:bg-zinc-900 hover:text-white transition duration-300 ease-in-out'><a href="https://github.com/karan01ingh/Portfolio">Github</a></button>
          <button className=' w-24 border-2 border-zinc-800 p-1 rounded-full text-sm hover:bg-zinc-900 hover:text-white transition duration-300 ease-in-out'><a href="">Live Demo</a></button>
        </div>

        </div>
        </div>
      </div>
      {/* Conatct Us */}
      <div className='h-screen w-full  flex flex-col pt-10 justify-center items-center bg-indigo-500 justify-around'  id='Contact'>
        <div className='text-center'>
          <h1 className='text-lg font-medium text-zinc-900 text-centers m-2'>Get In Touch</h1>
          <h1 className='text-5xl font-semibold text-zinc-950 text-center m-2 mb-10'>Contact Me</h1>
          <div className='border-2 border-zinc-800 p-2 rounded-3xl mt-5 flex flex-row '>
            <img src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png" alt="" className='h-10 w-10' />
            <h1 className='text-lg font-medium text-zinc-900 text-centers ml-1 mt-1'>Example@gmail.com</h1>
          </div>
        </div>
        <div className='flex flex-row justify-center w-1/3  h-20 text-xl font-semibold text-zinc-900 justify-between'>
        <a href="#About"  className=' hover:underline'>About</a><a href="#Skills" className='transition duration-150 ease-in hover:underline'>Skills</a><a href="#Projects" className='transition duration-150 ease-in hover:underline'>Projects</a>
        <a  className='transition duration-150 ease-in hover:underline' href="#Home">Home</a>
        </div>
        <footer className='text-sm text-zinc-900'>Copyright © 2024 Karan Singh. All Right Reserved</footer>
      </div>
    </div>
  )
}

export default App

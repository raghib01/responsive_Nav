import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom'
import Logo from './assets/Logo.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";



export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-slate-300">
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md ">
            <Link href="">
              <img src={Logo} alt="logo" className='w-32 hover:scale-105 transition-all' />
            </Link>

            <ul className='hidden xl:flex items-center gap-5 font-semibold text-base'>
              <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' ><NavLink to={'/'}>Home</NavLink></li>
              <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' >About</li>
              <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' >Menu</li>
              <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' >Service</li>
              <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer' >Contact</li>

            </ul>
            <div className="relative hidden md:flex justify-between items-center gap-3">
            <IoSearchOutline className='absolute ml-3 text-2xl text-gray-500' />
              <input type="text" placeholder='Search ...' className='py-2 pl-10 rounded-md border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500'/>
            </div>

            <div className='xl:hidden' >
              <FaBarsStaggered className='text-2xl  cursor-pointer' onClick={()=> setIsOpen(!isOpen)}/>
              
            </div>

            <div className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isOpen ? "opacity-100":"opacity-0"} `}
            
            style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
            >
              <li className='list-none w-full text-center p-4 hover:bg-sky-300 hover:text-white transition-all cursor-pointer'>Home</li>
              <li className='list-none w-full text-center p-4 hover:bg-sky-300 hover:text-white transition-all cursor-pointer'>About</li>
              <li className='list-none w-full text-center p-4 hover:bg-sky-300 hover:text-white transition-all cursor-pointer'>Menu</li>
              <li className='list-none w-full text-center p-4 hover:bg-sky-300 hover:text-white transition-all cursor-pointer'>Service</li>
              <li className='list-none w-full text-center p-4 hover:bg-sky-300 hover:text-white transition-all cursor-pointer'>Contact</li>
            </div>
            
      </header>
    </div>
  )
}

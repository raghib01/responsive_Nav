import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import Logo from '../assets/Logo.png'

export default function navbar() {
    const [nav, setNav] = useState(false);
    // if click hambergur it goes from false(!nav) to true(nav)
    const handleClick = () => setNav(!nav)

  return (
     <div className=''>
        <nav className=' bg-white flex justify-between items-center px-10 py-5'>
            <div>
                <img src={Logo} alt="" className=' w-1/2 ' />
            </div>
            <ul className='hidden md:flex gap-6 font-semibold '>
                <Link to='/'><li className='p-2 hover:text-teal-700'>Home</li></Link>
                <Link to='/product'><li className='p-2 hover:text-teal-700'>Products</li></Link>
                <Link to='/service'><li className='p-2 hover:text-teal-700'>Service</li></Link>
                <Link to='/contact'><li className='p-2 hover:text-teal-700'>Contacts</li></Link>
            </ul>
            <div className='md:hidden z-10' onClick={handleClick}>
                {nav ? <FaTimes size={25}/> : <HiMiniBars3BottomRight size={25}/> }
            </div>

            {/* mobile menu */}
            <ul className={`${
                nav ? ' opecity-100 transform translate-x-full':'opecity-0 transform translate-y-0'}
                transition-transform text-white  absolute top-20 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl 
                `}>
                <Link to='/'><li className='p-2 hover:text-teal-700'>Home</li></Link>
                <Link to='/product'><li className='p-2 hover:text-teal-700'>Products</li></Link>
                <Link to='/service'><li className='p-2 hover:text-teal-700'>Service</li></Link>
                <Link to='/contact'><li className='p-2 hover:text-teal-700'>Contacts</li></Link>
            </ul>
            
        </nav>
     </div>
  )
}

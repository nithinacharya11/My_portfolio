import React, { useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTimes, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/profile_photo.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(prevState => !prevState)
  }
  
  return (
    <div className='flex justify-between items-center'>
        <div className='w-10'>
            <img src={Logo} alt="Logo" className='rounded-full'/>
        </div>
        <ul className='hidden md:flex gap-8'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div className='md:hidden z-10' onClick={handleClick}>
            {nav ? <FaTimes/>:<FaBars/>}
        </div>
        {/* mobile nav */}
        <ul className={nav ? 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-10 bg-[#000300]': 'hidden'}>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col left-0 top-[35%] gap-0'>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2] '>
                    <a href="/" className='flex justify-around items-center w-full gap-2'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#161B22] '>
                    <a href="/" className='flex justify-around items-center w-full gap-2'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1A8CD8] '>
                    <a href="/" className='flex justify-around items-center w-full gap-2'>
                        Twitter <FaTwitter size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

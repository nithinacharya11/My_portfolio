import React, { useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTimes, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(prevState => !prevState)
  }
  
  return (
    <div className='flex justify-between items-center'>
        <div className='w-24'>
            <img src={Logo} alt="Logo"/>
        </div>
        <ul className='hidden md:flex gap-8 cursor-pointer'>
            <li className='hover:scale-110 duration-300'>
              <Link to="home"smooth={true} duration={500}>
               Home
              </Link>
            </li>
            <li className='hover:scale-110 duration-300'>
              <Link to="about"smooth={true} duration={500}>
               About
              </Link>
            </li>
            <li className='hover:scale-110 duration-300'>
              <Link to="skills"smooth={true} duration={500}>
               Skills
              </Link>
            </li>
            <li className='hover:scale-110 duration-300'>
              <Link to="projects"smooth={true} duration={500}>
               Projects
              </Link>
            </li>
            <li className='hover:scale-110 duration-300'>
              <Link to="contact"smooth={true} duration={500}>
               Contact
              </Link>
            </li>
        </ul>
        <div className='md:hidden z-10 cursor-pointer' onClick={handleClick}>
            {nav ? <FaTimes/>:<FaBars/>}
        </div>
        {/* mobile nav */}
        <ul className={nav ? 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-10 bg-[#000300] cursor-pointer': 'hidden'}>
            <li className='hover:scale-110 duration-300'><Link onClick={handleClick} to="home"smooth={true} duration={500}>
               Home
              </Link></li>
            <li className='hover:scale-110 duration-300'><Link onClick={handleClick} to="about"smooth={true} duration={500}>
               About
              </Link></li>
            <li className='hover:scale-110 duration-300'><Link onClick={handleClick} to="skills"smooth={true} duration={500}>
               Skills
              </Link></li>
            <li className='hover:scale-110 duration-300'><Link onClick={handleClick} to="projects"smooth={true} duration={500}>
               Projects
              </Link></li>
            <li className='hover:scale-110 duration-300'><Link onClick={handleClick} to="contact"smooth={true} duration={500}>
               Contact
              </Link></li>
        </ul>
        {/* social icons */}
        <div className='hidden md:flex fixed flex-col left-0 top-[35%] gap-0'>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2] '>
                    <a href="https://www.linkedin.com/in/nithin-p-874361153/" target='_blank' className='flex justify-around items-center w-full gap-2'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#161B22] '>
                    <a href="https://github.com/nithinacharya11" target="_blank" className='flex justify-around items-center w-full gap-2'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1A8CD8] '>
                    <a href='https://twitter.com/nithin1503' target='_blank' className='flex justify-around items-center w-full gap-2'>
                        Twitter <FaTwitter size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

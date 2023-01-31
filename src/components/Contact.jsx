import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center px-2' name='contact'>
      <form method='POST' action='https://getform.io/f/3470a685-4dc2-46ba-8cc4-e03b7d9c3ed4'>
        <div className='p-3'>
            <p className='w-fit mb-2 text-2xl border-b-2 md:text-4xl font-semibold text-purple-500'>Contact</p>
            <p className='text-sm text-purple-500'>Submit the form below or send me an email- <span className='text-white font-semibold'>nithinpacharya@gmail.com</span> </p>
        </div>
        <div className='flex flex-col gap-2 p-3'>
            <input type="text" name='Name' placeholder='Name' className='mb-2 p-2 text-black '/>
            <input type="text" name='Email' placeholder='Email' className='mb-2 p-2 text-black '/>
            <textarea type="text" name='Message' placeholder='Message' className='mb-4 p-2 text-black '/>
            <button type='submit' className='bg-blue-800 w-fit mx-auto px-4 py-2 rounded hover:scale-110 duration-300'>Send</button>
        </div>
      </form>
      <div className='mt-20 flex gap-10 md:hidden px-4'>
            <ul>
                <li className='bg-[#0A66C2] p-2 rounded hover:scale-110 duration-300'>
                    <a href="https://www.linkedin.com/in/nithin-p-874361153/" target='_blank' className='flex justify-around items-center w-full gap-2'>
                        LinkedIn <FaLinkedin size={20}/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className=' bg-[#161B22] p-2 rounded hover:scale-110 duration-300'>
                    <a href="https://github.com/nithinacharya11" target="_blank" className='flex justify-around items-center w-full gap-2'>
                        Github <FaGithub size={20}/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className=' bg-[#1A8CD8] p-2 rounded hover:scale-110 duration-300'>
                    <a href='https://twitter.com/nithuacharya11?t=EIXMl87pzKtfloL_doL4Ow&s=09' target='_blank' className='flex justify-around items-center w-full gap-2'>
                        Twitter <FaTwitter size={20}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Contact

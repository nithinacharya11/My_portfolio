import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='w-full h-screen'>
        <div className='flex flex-col gap-2 mx-auto h-full justify-center md:px-20'>
            <h1 className='text-red-100 text-sm'>Hi, my name is <br />
                <span className='text-5xl font-semibold text-green-400'> Nithin</span>,<br />
                <span className='text-lg text-green-50'> I'm a Frontend Developer</span> 
            </h1>
            <p className='text-green-100 text-sm md:text-lg md:w-[70%]'>As a front-end developer with experience in HTML, CSS, JavaScript and React, I am able to design and develop user interfaces that are not only visually appealing, but also highly functional and responsive. My knowledge of HTML and CSS allows me to create structured and semantic layouts, while my experience with JavaScript and React gives me the ability to build dynamic and interactive user interfaces.</p>
            <button className='flex w-28 items-center justify-between rounded p-2 text-xs bg-green-300 text-[#000300] font-semibold'>View work
               <span className='hover:rotate-90 duration-300'><FaArrowRight size={13}/></span>
            </button>
        </div>
    </div>
  )
}

export default Home

import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center' name='about'>
        <div className='flex flex-col justify-center md:ml-20'>
            <div className='text-3xl md:text-5xl font-bold text-blue-700 border-b-2 border-blue-700 w-fit'>
                <h1>About</h1>
            </div>
            <div className='w-full grid grid-rows-auto gap-5 md:grid-cols-2  mt-3 md:w-[70%] '>
                <p className='text-xl text-blue-400 md:text-2xl'>Hi, I'm Nithin, Nice to meet you. Please take a look around</p>
                <p className='text-sm text-blue-200 md:text-lg'>I am a 22-year-old front-end developer from Karkala. I graduated from NMAM Institute of Technology in 2022, with a background in Civil Engineering. I have always been passionate about technology and problem-solving, and this has driven me into having skills and knowledge to turn that passion into a career. In my free time, I enjoy following sports such as Cricket, Formula 1, and Football. I also have a passion for singing and watching movies.</p>
            </div>
        </div>
    </div>
    
  )
}

export default About

import React from 'react';
import tictactoe from '../assets/tictactoe.png';
import quotegenerator from '../assets/quotegenerator.png';

const Projects = () => {
  const handleImageClick = (link) => {
    window.open(link, '_blank')
  }

  const handleButtonClick = (link) => {
    window.open(link, '_blank') 
  }
  return (
    <div name='projects' className='flex flex-col justify-center w-full h-screen'>
      <div>
        <h1 className='mb-8 mt-20 text-3xl text-center font-semibold text-pink-500 underline'>Projects</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center text-center text-md gap-5 font-semibold'>
        <div className='mb- p-8 shadow-gray-800 shadow-md'>
          <div onClick={() =>handleImageClick('https://effulgent-granita-47a1fd.netlify.app/')}>
           <img src={tictactoe} alt="image" className='h-[180px] md:h-[225px] mb-2 rounded-lg hover:scale-110 duration-300 cursor-pointer'/>
          </div>
          <p>TIC-TAC-TOE</p>
          <button className='text-xs font-medium hover:scale-105 duration-200 bg-violet-900 p-1 rounded mt-2' onClick={() => handleButtonClick('https://github.com/nithinacharya11/tic-tac-toe')}>View source code</button>
        </div>
        <div className='p-8 shadow-gray-800 shadow-md'>
          <div onClick={() => handleImageClick('https://luminous-torrone-2b243c.netlify.app')}>
           <img src={quotegenerator} alt="image" className='h-[180px] md:h-[225px] mb-2 rounded-lg hover:scale-110 duration-300 cursor-pointer'/>
          </div>
          <p>QUOTE-GENERATOR</p>
          <button className='text-xs font-medium hover:scale-105 duration-200 bg-violet-900 p-1 rounded mt-2' onClick={() =>handleButtonClick('https://github.com/nithinacharya11/Javascript-mini-projects/tree/main/JS%20Quote%20generator')} >View source code</button>
        </div>
      </div>
    </div>
  )
}

export default Projects

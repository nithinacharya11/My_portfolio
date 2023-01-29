import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png' ;
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import firebase from '../assets/firebase.png';
import github from '../assets/github.png'

const Skills = () => {
  return (
    <div name="skills">
      <div className='w-full h-screen flex flex-col justify-center md:w-[70%] mx-auto'>
        <div className='w-fit text-3xl font-bold mb-5  md:text-start md:text-4xl border-b-2 border-[#5A20CB] text-[#5A20CB]'>
          <h1>Skills</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
          <div className='text-center rounded shadow-blue-900 shadow-sm hover:scale-110 p-3 duration-300'>
            <img src={html} alt="html-logo" className='w-16 md:w-20 mx-auto mb-4'/>
            <span>HTML</span>
          </div>
          <div className='text-center rounded shadow-blue-900 shadow-sm hover:scale-110 p-3 duration-300'>
            <img src={css} alt="css-logo" className='w-16 md:w-20 mx-auto mb-4'/>
            <span>CSS</span>
          </div>
          <div className='text-center rounded shadow-blue-900 shadow-sm hover:scale-110 p-3 duration-300'>
            <img src={js} alt="javascript-logo" className='w-16 md:w-20 mx-auto mb-4'/>
            <span>Javascript</span>
          </div>
          <div className='text-center rounded shadow-blue-900 shadow-sm hover:scale-110 p-3 duration-300'>
            <img src={react} alt="react-logo" className='w-16 md:w-20 mx-auto mb-4'/>
            <span>React</span>
          </div>
          <div className='text-center rounded shadow-blue-900 shadow-sm hover:scale-110 p-3 duration-300'>
            <img src={tailwind} alt="tailwind-logo" className='w-16 md:w-20 mx-auto mb-4'/>
            <span>Tailwind</span>
          </div>
          <div className='text-center rounded shadow-blue-900 shadow-sm hover:scale-110 p-3 duration-300'>
            <img src={firebase} alt="firebase-logo" className='w-16 md:w-20 mx-auto mb-4'/>
            <span>Firebase</span>
          </div>
          <div className='text-center rounded shadow-blue-900 shadow-sm hover:scale-110 p-3 duration-300'>
            <img src={github} alt="github-logo" className='w-16 md:w-20 mx-auto mb-4'/>
            <span>Git</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

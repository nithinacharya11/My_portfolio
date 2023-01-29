import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <form method='POST' action='https://getform.io/f/3470a685-4dc2-46ba-8cc4-e03b7d9c3ed4'>
        <div className='p-3'>
            <p className='w-fit mb-2 text-2xl border-b-2 md:text-4xl md:font-semibold'>Contact</p>
            <p className='text-sm'>Submit the form below or send me an email- nithinpacharya@gmail.com</p>
        </div>
        <div className='flex flex-col gap-2 p-3'>
            <input type="text" name='Name' placeholder='Name' className='mb-2 p-2 text-black font-semibold'/>
            <input type="text" name='Email' placeholder='Email' className='mb-2 p-2 text-black font-semibold'/>
            <textarea type="text" name='Message' placeholder='Message' className='mb-4 p-2 text-black font-semibold'/>
            <button type='submit' className='bg-blue-800 w-fit mx-auto px-4 py-2 rounded hover:scale-110 duration-300'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Contact

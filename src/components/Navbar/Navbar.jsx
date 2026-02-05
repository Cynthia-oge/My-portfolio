import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-14 md:px-24 h-24 items-center border-b border-gray-200'>
       <h1 className=' text-3xl font-bold text-slate-900'>Cynthia Aniehe</h1>
       <div>
        <ul className='hidden lg:flex gap-8'>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer'><a href="#home">Home</a> </li>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer'><a href="#about">About</a></li>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer'><a href="#projects">Projects</a></li>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer'><a href="#blogs">Blogs</a></li>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer'><a href="#contact">Contact</a></li>
        </ul>
       </div>
       <button className="lg:hidden text-2xl">
            ☰
        </button>
    </div>
  )
}

export default Navbar
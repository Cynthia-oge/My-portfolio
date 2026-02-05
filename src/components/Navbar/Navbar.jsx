import React, { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='sticky top-0 z-50 bg-white border-b border-gray-200'>
      <div className='flex justify-between px-14 md:px-24 h-24 items-center'>
        
        {/* Logo */}
        <h1 className='text-3xl font-bold text-slate-900'>
          <a href="#home" onClick={closeMobileMenu}>
            Cynthia Aniehe
          </a>
        </h1>
        
        {/* Desktop Navigation */}
        <nav>
          <ul className='hidden lg:flex gap-8'>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer transition'>
              <a href="#home">Home</a>
            </li>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer transition'>
              <a href="#about">About</a>
            </li>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer transition'>
              <a href="#projects">Projects</a>
            </li>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer transition'>
              <a href="#blogs">Blogs</a>
            </li>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer transition'>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none transition"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            // Close icon (X)
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
      </div>
      
      {/* Mobile Navigation Menu with smooth animation */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-200 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <nav className='px-14 md:px-24 py-6'>
          <ul className='flex flex-col space-y-4'>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer py-2 transition'>
              <a href="#home" onClick={closeMobileMenu}>Home</a>
            </li>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer py-2 transition'>
              <a href="#about" onClick={closeMobileMenu}>About</a>
            </li>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer py-2 transition'>
              <a href="#projects" onClick={closeMobileMenu}>Projects</a>
            </li>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer py-2 transition'>
              <a href="#blogs" onClick={closeMobileMenu}>Blogs</a>
            </li>
            <li className='text-gray-700 font-semibold hover:text-blue-600 cursor-pointer py-2 transition'>
              <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      
    </div>
  )
}

export default Navbar
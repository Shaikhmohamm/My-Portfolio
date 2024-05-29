import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.webp';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-black text-yellow-500'>
      <div className='flex justify-between items-center p-3 h-20'>
        <div className='flex items-center'>
          <img src={logo} alt="Logo" className='w-12 h-12 rounded-md' />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-2xl'>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className='hidden md:flex space-x-4 text-lg font-semibold md:mr-2 lg:mr-5'>
          <Link to='/' className='font-serif p-2'>Home</Link>
          <Link to='/about' className='font-serif p-2'>About</Link>
          <Link to='/skills' className='font-serif p-2'>Skills</Link>
          <Link to='/projects' className='font-serif p-2'>Projects</Link>
          <Link to='/contacts' className='font-serif p-2'>Contacts</Link>
        </div>
      </div>
      {isOpen && (
        <div className='lg:hidden flex flex-col items-center space-y-4 py-4'>
          <Link to='/' className='p-2' onClick={toggleMenu}>Home</Link>
          <Link to='/about' className='p-2' onClick={toggleMenu}>About</Link>
          <Link to='/skills' className='p-2' onClick={toggleMenu}>Skills</Link>
          <Link to='/projects' className='p-2' onClick={toggleMenu}>Projects</Link>
          <Link to='/contacts' className='p-2' onClick={toggleMenu}>Contacts</Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;

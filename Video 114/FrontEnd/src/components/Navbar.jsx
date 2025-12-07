import React from 'react'
import './Navbar.css'

const Navbar = ({ todos }) => {
  return (
    <nav className='flex justify-between items-center w-full h-12 px-4 text-white'>
        <div>
            <span className='w-fit h-fit cursor-context-menu font-bold'>iTask</span>    
        </div>
        <ul className='flex justify-center items-center gap-10 h-full'>
            <li className='cursor-pointer relative h-fit'>Home</li>
            <li className='cursor-pointer relative h-fit'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar

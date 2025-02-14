'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-white shadow-md'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
        {/* Logo */}
        <Link href='/'>
          <h1 className='font-bold text-2xl cursor-pointer'>
            ReadWrite<span className='text-blue-600'>Fun</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Menu Button */}
        <div className='block sm:hidden z-10'>
          <AiOutlineMenu size={20} onClick={toggleNav} className='cursor-pointer' />
        </div>

        {/* Mobile Navigation */}
        <MobileNav isOpen={isOpen} onClose={toggleNav} />
      </div>
    </nav>
  )
}

export default Navbar 
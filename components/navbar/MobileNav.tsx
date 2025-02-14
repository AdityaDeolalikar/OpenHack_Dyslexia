import Link from 'next/link'
import { navLinks } from './NavLinks'
import { AiOutlineClose } from 'react-icons/ai'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <div
      className={`sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='absolute top-6 right-6'>
        <AiOutlineClose size={20} onClick={onClose} className='cursor-pointer' />
      </div>
      <ul>
        {navLinks.map((link) => (
          <li
            key={link.label}
            onClick={onClose}
            className='p-4 text-4xl hover:text-blue-600 ease-in duration-200'
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNav 
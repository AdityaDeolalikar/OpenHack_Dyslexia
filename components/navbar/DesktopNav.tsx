import Link from 'next/link'
import { navLinks } from './NavLinks'

const DesktopNav = () => {
  return (
    <ul className='hidden sm:flex'>
      {navLinks.map((link) => (
        <li key={link.label} className='p-4 hover:text-blue-600 ease-in duration-200'>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default DesktopNav 
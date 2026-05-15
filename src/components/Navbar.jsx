import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Event', path: '/event' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
  { label: 'Register', path: '/register' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    [
      'flex w-full items-center justify-center rounded-lg px-4 py-3 text-[15px] font-semibold uppercase transition-colors duration-200 hover:bg-gray-50 lg:w-auto lg:justify-start lg:py-0',
      isActive
        ? 'text-[#FF3E41]'
        : 'text-black hover:text-[#FF3E41]',
    ].join(' ')

  return (
    <nav className="sticky top-0 z-50 border-t-8 border-yellow-400 bg-white shadow-md">
      <div className="mx-auto flex w-full max-w-7xl flex-nowrap items-center justify-between px-4 py-3 md:px-6">
        <NavLink
          to="/"
          className="flex items-center px-2 md:px-4"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logo}
            alt="Samyukt Gujarati Samaj"
            className="h-14 w-auto object-contain sm:h-16"
          />
        </NavLink>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-black text-black lg:hidden"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative h-4 w-5">
            <span className="absolute left-0 top-0 h-0.5 w-5 bg-current" />
            <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current" />
            <span className="absolute bottom-0 left-0 h-0.5 w-5 bg-current" />
          </span>
        </button>

        <div
          id="navbar-menu"
          className={`absolute left-0 top-full z-20 w-full border-t border-gray-100 bg-white shadow-sm lg:static lg:mt-0 lg:flex lg:w-auto lg:border-0 lg:bg-transparent lg:shadow-none ${isOpen ? 'block' : 'hidden lg:block'
            }`}
        >
          <div className="flex w-full flex-col gap-2 p-4 lg:ml-auto lg:flex-row lg:items-center lg:gap-0 lg:p-0">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="w-full border-t border-gray-100  text-center lg:w-auto lg:border-0 lg:p-0 lg:text-right lg:text-xl">
            <a
              href="tel:+916287678767"
              className="inline-flex items-center justify-center gap-0 text-[#FF3E41] font-semibold hover:text-[#d72d30] lg:justify-end align-middle whitespace-nowrap"
            >
              <span className="text-xl text-yellow-300 align-middle" aria-hidden="true">
                &#9742;
              </span>
              <span className="align-middle text-xl">+91 62876 78767</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount } = useContext(ShopContext)

  return (
    <div className='flex items-center justify-between py-5 font-medium bg-white text-[#28a745]'>
      {/* Logo */}
      <NavLink to='/'>
        <img src={assets.campuslogo_whitegreen} className='w-36' alt='Logo' />
      </NavLink>

      {/* Navigation Links */}
      <ul className='hidden sm:flex gap-5 text-sm'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#28a745] hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#28a745] hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#28a745] hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#28a745] hidden' />
        </NavLink>
      </ul>

      {/* Icons and Profile */}
      <div className='flex items-center gap-6'>
        {/* Search Icon */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt='Search'
          aria-label='Search'
        />

        {/* Profile Dropdown */}
        <div className='group relative'>
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt='Profile' aria-label='Profile' />
          <div className='absolute right-0 pt-4 hidden group-hover:block'>
            <div className='flex flex-col w-36 gap-2 py-3 px-5 bg-white text-[#28a745] rounded shadow-lg'>
              <p className='cursor-pointer hover:text-[#218838]'>My Profile</p>
              <p className='cursor-pointer hover:text-[#218838]'>Orders</p>
              <p className='cursor-pointer hover:text-[#218838]'>LogOut</p>
            </div>
          </div>
        </div>

        {/* Cart Icon with Count */}
        <Link to='/cart' className='relative' aria-label='Cart'>
          <img src={assets.cart_icon} className='w-5 min-w-[20px]' alt='Cart' />
          <p className='absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-4 h-4 flex items-center justify-center text-center leading-4 bg-[#28a745] text-white rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger Menu for small screens */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt='Menu'
          aria-label='Menu'
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 transition-all duration-300 bg-white overflow-hidden ${
          visible ? 'w-full' : 'w-0'
        }`}
        aria-hidden={!visible}
      >
        {/* Content inside the sliding panel */}
        <div className='flex flex-col text-[#28a745]'>
          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-4 p-3 cursor-pointer'
            role='button'
            aria-label='Close menu'
          >
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt='Back' />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-2 pl-6 border-b border-[#28a745]'
            to='/'
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-2 pl-6 border-b border-[#28a745]'
            to='/collection'
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-2 pl-6 border-b border-[#28a745]'
            to='/about'
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-2 pl-6 border-b border-[#28a745]'
            to='/contact'
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
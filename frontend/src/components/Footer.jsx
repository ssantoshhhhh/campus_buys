import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='py-10'>
      {/* Main layout with three columns */}
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 px-4'>
        {/* Logo and description */}
        <div>
          <img
            src={assets.campuslogo_bg_removed}
            className='mb-5 w-32'
            alt='Campus Buys Logo'
          />
          <p className='w-full md:w-2/3 text-gray-500'>
            Our services are available for all types of products. We offer a wide range of products to choose from, including electronics, furniture, and more. Our goal is to provide you with the best rental experience possible.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5 text-[#28a745]'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><a href="#" className='hover:text-[#28a745]'>Home</a></li>
            <li><a href="#" className='hover:text-[#28a745]'>About Us</a></li>
            <li><a href="#" className='hover:text-[#28a745]'>Delivery</a></li>
            <li><a href="#" className='hover:text-[#28a745]'>Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className='text-xl font-medium mb-5 text-[#28a745]'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-9876543210</li>
            <li>contact@campusbuys.com</li>
          </ul>
        </div>
      </div>
      
      {/* Footer bottom */}
      <hr className='my-4' />
      <p className='py-5 text-sm text-center text-gray-600'>
        &copy; {new Date().getFullYear()} campusbuys.com - All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
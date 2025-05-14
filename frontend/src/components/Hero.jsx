import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom' // if using react-router

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-6 px-2">
        {/* Wrapper for text content */}
        <div className="max-w-sm">
          
          {/* "OUR PRODUCTS" with line */}
          <div className="flex items-center mb-2">
            {/* Line */}
            <div className="w-6 md:w-8 h-[2px] bg-[#28a745]"></div>
            {/* Text */}
            <p className="ml-2 font-medium text-xs md:text-sm">OUR PRODUCTS</p>
          </div>
          
          {/* Main Heading */}
          <h1 className="prata-regular text-2xl sm:text-3xl lg:text-4xl leading-relaxed mb-3 text-[#28a745]">
            Always Latest
          </h1>
          
          {/* "SHOP NOW" with line, clickable */}
          <Link to="/shop" className="flex items-center mt-2 cursor-pointer hover:text-[#28a745] transition">
            {/* Text */}
            <p className="font-semibold text-xs md:text-sm">SHOP NOW</p>
            {/* Line */}
            <div className="w-6 md:w-8 h-[2px] bg-[#28a745] ml-2"></div>
          </Link>
        </div>
      </div>
      
      {/* Hero right side image */}
      <div className="w-full sm:w-1/2 flex justify-center items-center p-2">
        {/* Smaller image size */}
        <img
          src={assets.hero_apron}
          alt="Hero"
          className="max-w-[200px] w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
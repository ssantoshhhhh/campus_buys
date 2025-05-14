import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-[#28a745]'>
      
      {/* Easy Buying */}
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy Buying</p>
        <p className='text-[#28a745]'>We Offer Hassle Free Rental Policy</p>
      </div>

      {/* Quality Assured Products */}
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Quality Assured Products</p>
        <p className='text-[#28a745]'>We check our products before giving it to you to ensure quality</p>
      </div>
      
      {/* Customer Support */}
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Customer Support</p>
        <p className='text-[#28a745]'>Contact Us to know more about our policy</p>
      </div>

    </div>
  )
}

export default OurPolicy
import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Handle subscription logic here
  }

  return (
    <div className='text-center px-4'>
      {/* Title */}
      <p className='text-2xl font-medium text-gray-800 mb-4'>
        Subscribe to our Membership to get Discounts on further Rentals and Buyings
      </p>
      
      {/* Description */}
      <p className='text-gray-400 mb-6 max-w-2xl mx-auto'>
        Subscribe to our newsletter and get 10% off your first purchase. Plus, be the first to know about our latest collections and exclusive offers.
      </p>
      
      {/* Subscription Form */}
      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-2/3 md:w-1/2 flex items-center gap-3 mx-auto border rounded px-3 py-2 shadow'
      >
        <input
          className='flex-1 outline-none text-gray-700 placeholder-gray-400'
          type='email'
          placeholder='Enter Your Email'
          required
        />
        <button
          type='submit'
          className='bg-[#28a745] hover:bg-green-600 text-white text-xs px-6 py-2 rounded transition duration-300'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsLetterBox
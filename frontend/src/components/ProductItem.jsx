import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <div
      className='bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-4 max-w-sm w-full mx-auto'
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)', // default shadow
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(40, 167, 69, 0.6)' // green shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)' // back to normal
      }}
    >
      <Link to={`/product/${id}`} className='w-full flex flex-col items-center cursor-pointer'>
        {/* Image container with hover zoom effect */}
        <div className='overflow-hidden rounded-md w-full'>
          <img
            src={image[0]}
            alt={name}
            className='w-full h-40 md:h-48 object-cover transform hover:scale-105 transition-transform duration-300'
          />
        </div>
        {/* Product Name */}
        <p className='pt-3 pb-1 text-sm md:text-base font-medium text-center line-clamp-2 text-gray-800'>
          {name}
        </p>
        {/* Price */}
        <p className='text-sm md:text-base font-semibold text-green-600'>
          {currency}
          {price}
        </p>
      </Link>
    </div>
  )
}

export default ProductItem
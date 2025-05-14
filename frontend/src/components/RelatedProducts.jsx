import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      const filteredProducts = products.filter(
        (item) =>
          item.category === category && item.subCategory === subCategory
      )
      setRelated(filteredProducts.slice(0, 5))
    }
  }, [products, category, subCategory]) // include dependencies

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1='RELATED' text2='PRODUCTS' />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-10'>
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
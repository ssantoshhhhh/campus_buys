import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('Relevant')

  const toggleCategory = (e) => {
    const value = e.target.value
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value))
    } else {
      setCategory((prev) => [...prev, value])
    }
  }

  const toggleSubCategory = (e) => {
    const value = e.target.value
    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value))
    } else {
      setSubCategory((prev) => [...prev, value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      )
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      )
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice()
    switch (sortType) {
      case 'Low-High':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price))
        break
      case 'High-Low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price))
        break
      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  // Optional: For debugging
  useEffect(() => {
    console.log('Selected categories:', category)
  }, [category])

  useEffect(() => {
    console.log('Selected subCategories:', subCategory)
  }, [subCategory])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2 text-[#28a745]'
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            alt=''
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium text-[#28a745]'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value='Men'
                checked={category.includes('Men')}
                onChange={toggleCategory}
              />{' '}
              Men
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value='Women'
                checked={category.includes('Women')}
                onChange={toggleCategory}
              />{' '}
              Women
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value='Unisex'
                checked={category.includes('Unisex')}
                onChange={toggleCategory}
              />{' '}
              Unisex
            </p>
          </div>
        </div>
        {/* Sub Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium text-[#28a745]'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value='Apron'
                checked={subCategory.includes('Apron')}
                onChange={toggleSubCategory}
              />{' '}
              Apron
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value='Drafter'
                checked={subCategory.includes('Drafter')}
                onChange={toggleSubCategory}
              />{' '}
              Drafter
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value='Combo'
                checked={subCategory.includes('Combo')}
                onChange={toggleSubCategory}
              />{' '}
              Combo
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'Collections'} />
          {/* Product Sorting */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value='Relevant'>Sort By Relevance</option>
            <option value='Low-High'>Sort By Low to High</option>
            <option value='High-Low'>Sort By High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
          {filterProducts.slice(0,10).map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection

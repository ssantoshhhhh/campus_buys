import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products , addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const currency = '₹'; // Set your currency here
  const [size, setSize] = useState(''); // State to manage selected size

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      if (product.image && product.image.length > 0) {
        setImage(product.image[0]);
      }
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div className='opacity-0'>Loading...</div>;
  }

  return (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product details */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image && productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover:opacity-75 transition'
                alt={`Product image ${index + 1}`}
                onClick={() => setImage(item)}
              />
            ))}
          </div>
        </div>

        {/* Main Product Image */}
        <div className='flex-1'>
          <img src={image} alt={productData.name} className='w-full h-auto' />
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          {/* Product Name */}
          <h1 className='text-2xl font-bold mt-2 mb-4'>{productData.name}</h1>
          
          {/* Ratings */}
          <div className='font-medium text-2xl gap-1 mt-2 flex items-center'>
            <img src={assets.star_icon} alt="star" className='w-3.5' />
            <img src={assets.star_icon} alt="star" className='w-3.5' />
            <img src={assets.star_icon} alt="star" className='w-3.5' />
            <img src={assets.star_icon} alt="star" className='w-3.5' />
            <img src={assets.star_dull_icon} alt="dull star" className='w-3.5' />
            <p className='pl-2'>(69)</p>
          </div>

          {/* Price with green color */}
          <p className='mt-5 text-3xl font-medium' style={{ color: '#28a745' }}>
            {currency}{productData.price}
          </p>

          {/* Description */}
          <p className='mt-5 text-gray-500 w-4/5'>
            {productData.description}
          </p>

          {/* Size Selection */}
          <div className='flex flex-col gap-4 my-8'>
            <p className='text-[#28a745] font-semibold'>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 rounded transition-colors duration-300 ${
                    item === size
                      ? 'border-[#28a745] bg-[#28a745] text-white'
                      : 'border-gray-300 hover:border-[#28a745] hover:bg-[#e6f4ea]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button styled with #28a745 */}
          <button onClick={()=>addToCart(productData._id,size)} className='bg-[#28a745] text-white px-8 py-3 text-sm font-semibold rounded hover:bg-green-600 active:bg-green-700 transition-colors duration-300'>
            ADD TO CART
          </button>

          {/* Additional Info */}
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Verified</p>
            <p>Assured Services</p>
            <p>Cash On Delivery</p>
          </div>
        </div>
      </div>

      {/* Description and Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          {/* Headings with green color */}
          <b className='border px-5 py-3 text-sm text-[#28a745]'>Description</b>
          <p className='border px-5 py-3 text-sm text-[#28a745]'> Review {12} </p>
        </div>
        {/* Info section */}
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>We Offer You a wide range of your essentials in your first year without any hustle</p>
          <p>You Can Choose to Buy or Rent your essential item</p>
          <p>Become a seller by setting a price to your item and sell through us</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
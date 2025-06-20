import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQunatity,navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    // Loop through cartItems object properly
    for (const itemId in cartItems) {
      const sizesObj = cartItems[itemId];
      for (const size in sizesObj) {
        const quantity = sizesObj[size];
        if (quantity > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: quantity,
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cartData.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            if (!productData) return null; // Product not found

            return (
              <div
                key={index}
                className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
              >
                {/* Product info */}
                <div className='flex items-start gap-6'>
                  <img
                    src={productData.image?.[0]}
                    alt=""
                    className='w-16 sm:w-20'
                  />
                  <div>
                    <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>
                        {currency} {productData.price}
                      </p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'> {item.size} </p>
                    </div>
                  </div>
                </div>

                {/* Quantity input */}
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => {
                    const newQty = parseInt(e.target.value, 10);
                    if (newQty >= 1) {
                      updateQunatity(item._id, item.size, newQty);
                    }
                  }}
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2'
                />

                {/* Delete icon */}
                <img
                  onClick={() => updateQunatity(item._id, item.size, 0)}
                  className='w-4 mr-4 sm:w-4 cursor-pointer'
                  src={assets.bin_icon}
                  alt="Remove"
                />
              </div>
            );
          })
        )}
      </div>
      
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal / >
          <div className='w-full text-end '>
            <button onClick={()=>navigate('/placeorder')} className='bg-[#28a745] text-black text-sm my-8 px-8 py-3 cursor-pointer'>Proceed To CheckOut</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
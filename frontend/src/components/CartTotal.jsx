import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();

  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className='w-full'>
      <div className="text-2xl">
        <Title text1={'CART'} text2={'TOTAL'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        {/* Subtotal */}
        <div className="flex justify-between px-2">
          <p className="text-left">Subtotal</p>
          <p className="text-right">{currency} {subtotal}.00</p>
        </div>
        <hr />
        {/* Shipping Fee */}
        <div className="flex justify-between px-2">
          <p className="text-left">Shipping Fee</p>
          <p className="text-right">{currency} {delivery_fee}.00</p>
        </div>
        <hr />
        {/* Total */}
        <div className="flex justify-between px-2 font-bold">
          <p className="text-left">Total</p>
          <p className="text-right">{currency} {total}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
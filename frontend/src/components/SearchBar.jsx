import React, { useContext, useEffect, useRef } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();

  // Reference to the container div
  const containerRef = useRef(null);

  // Determine if search should be visible based on URL and showSearch
  const shouldShow = location.pathname.includes('collection') && showSearch;

  // Optional: Close search on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowSearch(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setShowSearch]);

  if (!shouldShow) return null;

  return (
    <div className='border-t border-b bg-gray-50 text-center'>
      {/* Apply inline style for hover box-shadow */}
      <div
        ref={containerRef}
        className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 transition-shadow duration-300'
        style={{
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(40, 167, 69, 0.6)' // green shadow
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)' // default
        }}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-inherit text-sm'
          type='text'
          placeholder='Search'
          aria-label='Search'
        />
        <img className='w-4 ml-2' src={assets.search_icon} alt='Search icon' />
        <img
          className='w-3 cursor-pointer ml-2'
          onClick={() => setShowSearch(false)}
          src={assets.cross_icon}
          alt='Close'
        />
      </div>
    </div>
  );
};

export default SearchBar;
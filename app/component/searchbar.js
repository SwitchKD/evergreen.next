'use client'
import React, { useState } from 'react';
import './searchbar.css'

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
    <div className='search_container'>
      <input
        className='searchbar'
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleInputChange}
      />
      <p className='search_display'>Searching for  {searchValue}</p>
    </div>
    </>
  )
}

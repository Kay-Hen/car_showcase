"use client";
import React, { useState } from 'react';
import SearchManufacturer from './SearchManufacturer';

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add search logic here
  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__items'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}

export default Searchbar;

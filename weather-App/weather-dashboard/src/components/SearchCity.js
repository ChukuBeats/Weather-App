import React, { useState } from 'react';

const SearchCity = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5 ">
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city" 
        className="border p-2 rounded mr-2"
      />
      <button type="submit" className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-green-700">Search</button>
    </form>
  );
};

export default SearchCity;

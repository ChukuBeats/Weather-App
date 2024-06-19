import React, { useState, useEffect } from 'react';
import axios from 'axios';


const FavoriteCities = () => {
  const [favorites, setFavorites] = useState([]);
  const [city, setCity] = useState('');
 

  useEffect(() => {
    const fetchFavorites = async () => {
      const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=b9c874c8936bfa82e79d1f1a8f4c9e32`);
      setFavorites(result.data,"url") 
    };

    fetchFavorites();
  }, []);

  const handleAddFavorite = async (city) => {
    const result = await axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9c874c8936bfa82e79d1f1a8f4c9e32`);
    setFavorites([result?.data?.name])
    setCity('');
     };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddFavorite(city);
    
  };

  return (
    <div className="favorite-cities">
      <h3 className="text-2xl font-bold mb-2">Favorite Cities</h3>
      <form onSubmit={handleSubmit} className="mb-5">
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Add favorite city" 
          className="border p-2 rounded mr-2"
        />
        <button type="submit" className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-green-700">Add</button>
      </form>
      <ul className="list-none p-0 text-2xl">
        {favorites?.map(fav => (
          <li key={fav.id} className="mb-2">
            {fav}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteCities;

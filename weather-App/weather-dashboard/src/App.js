import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import WeatherDashboard from './components/WeatherDashboard';
import FavoriteCities from './components/FavoriteCities';

const App = () => {
  return (
    <div className=' bg-gray-100 pb-5 pt-2'>
    <div className="app font-sans text-center m-5  ">
      <nav className="mb-5 flex justify-end mx-20">
        <Link to="/" className="mr-3 text-black   rounded-lg border-2 solid px-3 py-1 text-lg bg-orange-300 hover:bg-gray-300">Home</Link>
        <Link to="/favorites" className="text-black rounded-lg border-2 solid px-3 py-1 text-lg bg-orange-300 hover:bg-gray-300">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WeatherDashboard />} />
        <Route path="/favorites" element={<FavoriteCities />} />
      </Routes>
    </div>
    </div>
  );
};

export default App;

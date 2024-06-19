import React, { useState, useEffect } from 'react';
import SearchCity from './SearchCity';
import WeatherDisplay from './WeatherDisplay';
import axios from 'axios';

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('metric'); 

  useEffect(() => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
      handleSearch(lastCity);
    }
  }, []);

  const handleSearch = async (city) => {
    localStorage.setItem('lastCity', city);
    const apiKey = "b9c874c8936bfa82e79d1f1a8f4c9e32";
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`);
    const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`);
    setWeatherData(weatherResponse.data);
    setForecastData(forecastResponse.data);
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="weather-dashboard">
      <button onClick={toggleUnit} className="mb-5 px-3 py-1  bg-black text-white rounded">
        Toggle {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
      <SearchCity onSearch={handleSearch} />
      {weatherData && <WeatherDisplay weather={weatherData} forecast={forecastData} />}
    </div>
  );
};

export default WeatherDashboard;

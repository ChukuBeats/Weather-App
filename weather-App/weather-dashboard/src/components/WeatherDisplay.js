import React from 'react';

const WeatherDisplay = ({ weather, forecast }) => {
  return (
    <div className="weather-display bg-gray-100">
      <h2 className="text-3xl mb-2 font-bold text-red-500">{weather.name}</h2>
      <p className="text-lg ">{weather.main.temp}°</p>
      <p className="text-lg mb-5">{weather.weather[0].description}</p>
      <h3 className="text-2xl mt-4  mb-4">5-Day Forecast</h3>
      <div className="forecast flex  justify-around gap-10 overflow-scroll ">
        {forecast.list.map((item, index) => (
          <div key={index} className="text-center pb-10">
            <p className="text-md">{new Date(item.dt * 1000).toLocaleDateString()}</p><hr/>
            <p className="text-md text-sky-600">{item.main.temp}°</p><hr/>
            <p className="text-sm font-mono font-semibold text-red-800 ">{item.weather[0].description}</p><hr/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;

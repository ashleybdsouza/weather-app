import React, { useState } from 'react';
import './styles/weather.css';

function Weather() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);

  const API_KEY = 'b51a3b2ef64e93a260642a2e8e07fcf3'; // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('City not found');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          setError(null);
          console.log(data);
        })
        .catch(err => {
          setError(err.message);
          setData(null);
        });
      setLocation('');
    }
  };

  return (
    <div className="weather">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      {error && <p className="error">{error}</p>}
      {data && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              <h1>{data.main.temp.toFixed()}°C</h1>
            </div>
            <div className="description">
              <p>{data.weather[0].main}</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className='bold'>{data.main.feels_like.toFixed()}°C</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>{data.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>{data.wind.speed.toFixed()} MPH</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
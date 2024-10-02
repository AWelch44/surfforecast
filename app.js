import React, { useState, useEffect } from 'react';
import { getSurfForecast } from './api';
import './app.css';  // Optional: You can create a CSS file for styling

const App = () => {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchForecast = async () => {
    setLoading(true);
    setError(null);
    try {
      // Coordinates for Nags Head, NC
      const data = await getSurfForecast(35.9575, -75.6249);
      setForecast(data.data[0]);  // Weatherbit returns an array, so we take the first item
    } catch (err) {
      setError('Failed to load surf forecast.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForecast(); // Fetch forecast when the app loads
  }, []);

  return (
    <div className="App">
      <h1>Surf Forecast for Nags Head, NC</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : forecast ? (
        <div className="forecast">
          <p>Wave Height: {forecast.wave_height} m</p>
          <p>Wave Period: {forecast.wave_period} secs</p>
          <p>Wind Speed: {forecast.wind_spd} m/s</p>
          <p>Water Temp: {forecast.water_temp}°C</p>
        </div>
      ) : (
        <p>No forecast data available</p>
      )}
      <button onClick={fetchForecast}>Refresh Forecast</button>
    </div>
  );
};

export default App;

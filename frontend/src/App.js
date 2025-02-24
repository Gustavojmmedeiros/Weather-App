import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState('51.5074');
  const [lon, setLon] = useState('-0.1278');

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`/api/weather?lat=${lat}&lon=${lon}`);
      console.log('Response:', response.data); // Log da resposta
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error); // Log do erro
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Previsão do Tempo</h1>
      <div>
        <label>
          Latitude:
          <input
            type="text"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Longitude:
          <input
            type="text"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
          />
        </label>
      </div>
      <button onClick={fetchWeather}>Buscar Previsão</button>

      {weather && (
        <div>
          <h2>Dados Meteorológicos</h2>
          <pre>{JSON.stringify(weather, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
const express = require('express');
const cors = require('cors'); // Importa o pacote cors
const axios = require('axios');

const app = express();
const PORT = 8000;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

app.use(cors()); // Habilita o CORS para todas as rotas

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo ao backend! Use /api/weather?lat=LATITUDE&lon=LONGITUDE para buscar dados meteorológicos.');
});

// Rota da API de clima
app.get('/api/weather', async (req, res) => {
  const lat = req.query.lat || 23.331014;
  const lon = req.query.lon || 51.168075;
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`;

  console.log('URL:', url);

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('API Response:', error.response.data);
    }
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
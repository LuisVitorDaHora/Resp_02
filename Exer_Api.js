const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', async (req, res) => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
  
    res.json(data);
  });

  app.listen(PORT, () => {
    console.log("Servidor Node.js rodando na porta ${PORT}");
  });
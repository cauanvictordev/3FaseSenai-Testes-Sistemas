const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Esta é a rota que o seu teste está procurando (linha 9 do erro do jest)
app.get('/', (req, res) => {
  res.status(200).json({ message: "Quitanda SaaS online!" });
});

// Suas outras rotas...

module.exports = app;
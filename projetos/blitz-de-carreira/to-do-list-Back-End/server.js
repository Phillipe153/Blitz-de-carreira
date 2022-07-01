require('dotenv').config();
const express = require('express');
const router = require('./routes/indexRoutes');
const app = require('./api');

app.use(express.json());

app.use('/', router);

const port = process.env.API_PORT || 3000;

app.use((err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.message });
});

app.listen(port, () => console.log('ouvindo porta', port));

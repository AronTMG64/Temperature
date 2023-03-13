const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const server = express();

server.use(express.static(path.resolve('public')));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'temperature'
});

server.get('/api/temperature', (req, res) => {
  db.query(
    'SELECT * FROM `temperature`', 
    (err, rows, fields) => {
      res.status(200).json(rows);
  });
});

server.get('/api/temperature/:year', (req, res) => {
  db.query(
    `SELECT * FROM temperature WHERE temperature.year = ${req.params.year}`
  , (err, rows, fields) => {
    res.status(200).json(rows);
  });
});

server.listen(3000, () => console.log('Connected'));
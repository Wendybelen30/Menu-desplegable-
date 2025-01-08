const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Ween551640',
  database: 'menu_eventos_db' 
});
db.connect(err => {
  if (err) throw err;
  console.log('Conexión exitosa a MySQL');
});
app.get('/elementos', (req, res) => {
  db.query('SELECT * FROM elementos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
app.get('/eventos/:elementoId', (req, res) => {
  const { elementoId } = req.params;
  db.query('SELECT * FROM eventos WHERE elemento_id= ?', [elementoId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
app.get('/actividades/:eventoId', (req, res) => {
  const { eventoId } = req.params;
  db.query('SELECT * FROM actividades WHERE evento_id = ?', [eventoId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Importálások
const express = require('express');
const User = require('./models/user');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

// MongoDB connect
mongoose.connect('mongodb://localhost/my_database')
  .then(() => console.log('A MongoDB adatbázishoz sikeresen kapcsolódva!'))
  .catch(err => console.error('Hiba történt a MongoDB adatbázishoz való kapcsolódás közben:', err));

app.use(express.static(path.join(__dirname, '/')));

app.get('/', async(req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'webpage.html')); 
  } catch(err){
    console.log(err);
  }
});

// szerver
const port = 3000;
app.listen(port, () => {
    console.log(`Az alkalmazás fut a http://localhost:${port} címen!`);
});

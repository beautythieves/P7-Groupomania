const express = require('express');
const app = express();
const fs = require('fs');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const userRoutes = require('./routes/user');
const postRoutes = require ('./routes/post');
const dotenv = require('dotenv').config('../.env');
console.log(dotenv);

mongoose.connect(process.env.SECRET_MONGODB,// sécurisation via dotenv
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  app.use(express.json());
 /* logique CORS (cross origin ressource sharing) pour 
 que les utilisateurs puissent accéder depuis n'importe où à l'API */
app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
     next();
   });

  //Permet de créer le dossier images si il n'existe pas
if (!fs.existsSync('images')) {
  fs.mkdirSync('images');
};
   app.use('/images', express.static(path.join(__dirname, 'images')));
   app.use('/api/post', postRoutes);
   app.use('/api/auth', userRoutes);
 

module.exports = app;
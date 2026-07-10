// Modulo encargado unicamente de conectar la aplicacion a MongoDB (Atlas o local)
const mongoose = require('mongoose');

async function conectarDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('Falta la variable de entorno MONGODB_URI en el archivo .env');
  }

  await mongoose.connect(uri);
  console.log('Conectado a MongoDB');
}

module.exports = conectarDB;

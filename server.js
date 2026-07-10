// Carga las variables de entorno definidas en el archivo .env (PORT, MONGODB_URI, etc.)
require('dotenv').config();

const express = require('express');
const conectarDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Instancia principal de la aplicacion Express
const app = express();

// Middleware que permite leer el body de las peticiones como JSON (req.body)
app.use(express.json());

// Ruta de salud, sirve para confirmar rapidamente que el servidor esta arriba
app.get('/', (req, res) => {
  res.json({ mensaje: 'Servicio de Registro/Login funcionando' });
});

// Rutas de autenticacion (registro y login) montadas bajo el prefijo /api
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;

// Primero se conecta a la base de datos y solo despues se levanta el servidor,
// para evitar recibir peticiones sin tener acceso a MongoDB
conectarDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('No se pudo conectar a MongoDB:', error.message);
    process.exit(1);
  });

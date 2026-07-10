// Define las rutas relacionadas con autenticacion (registro y login)
const express = require('express');
const { registrar, login } = require('../controllers/authController');

const router = express.Router();

// POST /api/registro -> crea un nuevo usuario
router.post('/registro', registrar);

// POST /api/login -> valida usuario y contrasena
router.post('/login', login);

module.exports = router;

// Define las rutas relacionadas con autenticacion (registro y login)
const express = require('express');
const { registrar } = require('../controllers/authController');

const router = express.Router();

// POST /api/registro -> crea un nuevo usuario
router.post('/registro', registrar);

module.exports = router;

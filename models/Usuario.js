// Esquema de Mongoose que representa un usuario registrado en el sistema
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  // Nombre de usuario, unico para poder identificar cada cuenta
  usuario: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // Hash de la contrasena generado con bcrypt (nunca se guarda en texto plano)
  contrasenaHash: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Usuario', usuarioSchema);

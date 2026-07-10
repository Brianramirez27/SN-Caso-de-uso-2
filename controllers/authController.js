// Controlador con la logica de autenticacion: registro y login de usuarios
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

// Cantidad de rondas de sal para bcrypt (a mas rondas, mas seguro pero mas lento)
const RONDAS_SAL = 10;

// Registra un nuevo usuario con su contrasena hasheada
async function registrar(req, res) {
  const { usuario, contrasena } = req.body;

  // Validacion basica de los datos recibidos
  if (!usuario || !contrasena) {
    return res.status(400).json({ mensaje: 'Usuario y contrasena son obligatorios' });
  }

  try {
    // Verifica que el usuario no exista previamente
    const usuarioExistente = await Usuario.findOne({ usuario });
    if (usuarioExistente) {
      return res.status(409).json({ mensaje: 'El usuario ya existe' });
    }

    // Nunca se guarda la contrasena en texto plano, se guarda su hash
    const contrasenaHash = await bcrypt.hash(contrasena, RONDAS_SAL);

    await Usuario.create({ usuario, contrasenaHash });

    return res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error.message);
    return res.status(500).json({ mensaje: 'Error interno al registrar el usuario' });
  }
}

module.exports = { registrar };

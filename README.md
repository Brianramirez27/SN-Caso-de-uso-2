# SN - Caso de uso 2: Servicio de Registro / Login

Servicio web construido con Node.js y Express que expone dos endpoints:

- `POST /api/registro`: registra un nuevo usuario y contraseña (guardados en MongoDB, con la contraseña hasheada mediante bcrypt).
- `POST /api/login`: valida usuario y contraseña, devolviendo un mensaje de autenticación satisfactoria o de error.

## Tecnologias usadas
- Node.js
- Express (servidor HTTP)
- Nodemon (recarga automatica en desarrollo)
- MongoDB + Mongoose (persistencia de usuarios)
- bcrypt (hash seguro de contraseñas)

## Estructura del proyecto
```
server.js               Punto de entrada: conecta la DB y levanta Express
config/db.js            Conexion a MongoDB (Atlas o local)
models/Usuario.js       Esquema de Mongoose para los usuarios
controllers/authController.js   Logica de registro y login
routes/authRoutes.js    Definicion de las rutas /api/registro y /api/login
```

## Instalacion

```
npm install
```

## Configuracion

Copiar `.env.example` a `.env` y completar las variables:

```
PORT=3000
MONGODB_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/sn_caso_uso_2
```

`MONGODB_URI` debe apuntar a tu base de datos MongoDB (Atlas o local). El archivo `.env` no se sube a git.

## Ejecucion

Modo desarrollo (con recarga automatica via nodemon):
```
npm run dev
```

Modo normal:
```
npm start
```

## Endpoints

### POST /api/registro
Body (JSON):
```json
{ "usuario": "juan", "contrasena": "1234" }
```
Respuestas:
- `201` usuario creado: `{ "mensaje": "Usuario registrado correctamente" }`
- `409` si el usuario ya existe: `{ "mensaje": "El usuario ya existe" }`
- `400` si faltan datos: `{ "mensaje": "Usuario y contrasena son obligatorios" }`

### POST /api/login
Body (JSON):
```json
{ "usuario": "juan", "contrasena": "1234" }
```
Respuestas:
- Credenciales correctas: `{ "mensaje": "autenticación satisfactoria" }`
- Usuario inexistente o contraseña incorrecta: `{ "mensaje": "error de autenticación" }`

## Pruebas rapidas con curl

```
curl -X POST http://localhost:3000/api/registro -H "Content-Type: application/json" -d "{\"usuario\":\"test\",\"contrasena\":\"1234\"}"

curl -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d "{\"usuario\":\"test\",\"contrasena\":\"1234\"}"

curl -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d "{\"usuario\":\"test\",\"contrasena\":\"mala\"}"
```

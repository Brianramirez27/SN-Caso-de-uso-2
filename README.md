# SN - Caso de uso 2: Servicio de Registro / Login

Servicio web construido con Node.js y Express que expone dos endpoints:

- `POST /api/registro`: registra un nuevo usuario y contraseña.
- `POST /api/login`: valida usuario y contraseña, devolviendo un mensaje de autenticación satisfactoria o de error.

Estado actual: proyecto en construccion, avanzando por commits incrementales.

## Requisitos
- Node.js
- Una base de datos MongoDB (Atlas o local)

## Instalacion

```
npm install
```

## Configuracion

Copiar `.env.example` a `.env` y completar la variable `MONGODB_URI` con tu cadena de conexion a MongoDB.

## Ejecucion

```
npm run dev
```

# EventFlow API

📖 Temática:

API REST diseñada para administrar eventos, usuarios y autenticación mediante una arquitectura por capas con Node.js, Express y MongoDB.

🛠️ Tecnologías:
Node.js
Express
MongoDB
Mongoose
bcrypt
Dotenv
JSON Web Token (jwt)

⚙️ Instalación:
Clonar el repositorio.
Instalar las dependencias:

npm install

Configuración de variables de entorno

Crear un archivo .env tomando como referencia .env.example.

Variables necesarias:
PORT=
MONGO_URL=
JWT_SECRET=
COOKIE_SECRET

▶️ Cómo ejecutar:

Modo desarrollo

npm run dev

Modo producción

npm start

📁 Estructura del proyecto
src/
├── app.js
├── server.js
├── config/
│   ├── database.js       # Configuración de MongoDB
│   └── env.js            # Variables de entorno
├── controllers/
│   ├── eventsController.js      # Controlador de eventos
│   └── sessionController.js     # Registro, login, logout y usuario actual (current)
├── dao/
├── middlewares/
    └──authMiddleware.js  # Busqueda de usuario por mail y validacion de token 
├── models/
│   ├── eventModel.js     # Modelo de eventos
│   └── userModel.js      # Modelo de usuarios
├── repositories/
├── routes/
│   ├── eventsRouter.js
│   ├── healthRouter.js
│   └── sessionRouter.js
├── services/
├── utils/
│    ├──bcrypt.js   # Helpers para hash y validación de contraseñas
│    └──jwt.js      # Helpers para generar token y validarlo
└── .env.example

🌐 Endpoints disponibles

Método	    Ruta	                    Descripción
GET	    /api/health	            Verifica que el servidor está activo.
GET	    /api/events	            Devuelve una lista de eventos (vacía en esta etapa).
GET    /api/sessions/current     Devuelve los datos del usuario autenticado mediante el token.
POST  /api/sessions/register	  Registra un nuevo usuario.
POST  /api/sessions/login	      Login de usuario.
POST  /api/sessions/logout  Cierra la sesión del usuario eliminando la cookie de autenticación.



👤 Registro de usuarios:

Endpoint
POST /api/sessions/register

Body esperado
{
  "first_name": "Nahuel",
  "last_name": "Acosta",
  "email": "nahuel@mail.com",
  "password": "12345678"
}

Validaciones implementadas:
1- Todos los campos son obligatorios.
2- El email debe tener un formato válido.
3- El email se almacena normalizado (trim y lowercase).
4- No se permite registrar emails duplicados.
5- La contraseña debe tener una longitud mínima de 8 caracteres.
6- La contraseña se almacena hasheada mediante bcrypt.

Respuesta exitosa:
{
  "status": "success",
  "payload": {
    "id": "665f2a...",
    "first_name": "Nahuel",
    "last_name": "Acosta",
    "email": "nahuel@mail.com",
    "role": "user"
  }
}

Posibles respuestas:
Código	        Descripción
201	    Usuario registrado correctamente.
400	    Datos inválidos o campos obligatorios faltantes.
409	    El email ya se encuentra registrado.
500	    Error interno del servidor.

Endpoint
POST /api/sessions/login

Body esperado
{
  "email": "nahuel@mail.com",
  "password": "12345678"
}
Validaciones implementadas:
1- El usuario debe estar registrado.
2- La contraseña ingresada debe coincidir con la contraseña hasheada almacenada.
3- Si las credenciales son válidas, se genera un token JWT.
4- El token se almacena en una cookie HTTP Only firmada.

Respuesta exitosa
{
  "status": "success",
  "message": "Login exitoso"
}

Nota: Además de la respuesta JSON, el servidor envía una cookie jwt firmada (signed) y httpOnly que contiene el token de autenticación.

Posibles respuestas:

Código	    Descripción
200	    Inicio de sesión exitoso.
401	    Credenciales inválidas.
500	    Error interno del servidor.


Endpoint
GET /api/sessions/current

Requisitos:
- El usuario debe estar autenticado.
- Debe enviar una cookie jwt firmada con un token válido.

Validaciones implementadas:
1- Verifica que exista la cookie jwt.
2- Verifica que el token JWT sea válido y no haya expirado.
3- Si el token es válido, devuelve la información del usuario autenticado.

Respuesta exitosa
{
  "status": "success",
  "payload": {
    "id": "665f2a...",
    "email": "nahuel@mail.com",
    "role": "user"
  }
}

Posibles respuestas:
Código	       Descripción
200	    Información del usuario autenticado obtenida correctamente.
401	    Usuario no autenticado, token inválido o expirado.
500	    Error interno del servidor.


Endpoint
POST /api/sessions/logout

Requisitos:
- El usuario debe tener una sesión iniciada.
Funcionalidad:
1- Elimina la cookie jwt.
2- Finaliza la sesión del usuario.

Respuesta exitosa:
{
  "status": "success",
  "message": "Logout correcto"
}

Posibles respuestas:
Código	      Descripción
200	    Sesión cerrada correctamente.
500	    Error interno del servidor.

🧪 Cómo probar el registro:

Podés utilizar Postman, Insomnia o Thunder Client.

URL
POST http://localhost:3000/api/sessions/register
Headers
Content-Type: application/json
Body

Seleccionar raw → JSON y enviar un objeto con los campos indicados en el ejemplo anterior.
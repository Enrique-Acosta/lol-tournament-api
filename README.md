# LoL Tournament API

📖 Temática:

API REST desarrollada con Node.js, Express y MongoDB como base arquitectónica para una plataforma de gestión de torneos de League of Legends. Actualmente incluye la configuración del servidor, la conexión a MongoDB, la estructura del proyecto, endpoints iniciales y el registro de usuarios con validaciones básicas.

🛠️ Tecnologías:
Node.js
Express
MongoDB
Mongoose
bcrypt
Dotenv

⚙️ Instalación:
Clonar el repositorio.
Instalar las dependencias:
npm install

Configuración de variables de entorno

Crear un archivo .env tomando como referencia .env.example.

Variables necesarias:
PORT=
MONGO_URL=

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
│   └── sessionController.js     # Registro y login de usuarios
├── dao/
├── middlewares/
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
│   └── bcrypt.js         # Helpers para hash y validación de contraseñas
└── .env.example

🌐 Endpoints disponibles
Método	    Ruta	                    Descripción
GET	    /api/health	            Verifica que el servidor está activo.
GET	    /api/events	            Devuelve una lista de eventos (vacía en esta etapa).
POST  /api/sessions/register	Registra un nuevo usuario.
POST  /api/sessions/login	    Endpoint en desarrollo. Responde con 503 Service Unavailable.

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

🧪 Cómo probar el registro:

Podés utilizar Postman, Insomnia o Thunder Client.

URL
POST http://localhost:3000/api/sessions/register
Headers
Content-Type: application/json
Body

Seleccionar raw → JSON y enviar un objeto con los campos indicados en el ejemplo anterior.
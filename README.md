# Lol Tournament API
Temática

API REST desarrollada con Node.js y Express como base arquitectónica para una plataforma de gestión de torneos de League of Legends. En esta entrega se implementan la estructura del proyecto, la configuración del servidor y los endpoints iniciales.

Tecnologías
Node.js
Express
MongoDB
Mongoose
Dotenv
Instalación
Clonar el repositorio.
Instalar las dependencias:
npm install
Configuración de variables de entorno

Crear un archivo .env tomando como referencia .env.example.

Variables necesarias:

PORT
MONGO_URL

Cómo ejecutar

Modo desarrollo:

npm run dev

Modo producción:

npm start

Estructura de carpetas

src/
├── app.js
├── server.js
├── config/
│   ├── database.js    # Configuracion de MongoDB 
│   └── env.js         # Variables de entorno
├── controllers/
│   ├── eventsController.js     # Devuelve un lista vacia de eventos
│   └── sessionController.js    # Register y login responden con 503
├── dao/
├── middlewares/
├── models/
│   ├── eventModel.js   # Modelo de eventos
│   └── userModel.js    # Modelo de usuarios
├── repositories/
├── routes/
│   ├── eventsRouter.js    # Rutas de eventos
│   ├── healthRouter.js    # Verificación del servidor
│   └── sessionRouter.js   # Rutas de autenticación
├── services/
└── utils/

Rutas disponibles

Método	Ruta	Descripción
GET	/api/health	Verifica que el servidor está activo.
GET	/api/events	Devuelve la lista de eventos (vacía en esta etapa).
GET	/api/sessions	Estructura inicial para sesiones (Responde con status 503).
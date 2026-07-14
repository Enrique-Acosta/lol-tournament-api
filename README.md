# League of Legends Tournament API
Temática

API REST para gestionar un torneo de League of Legends, donde los equipos pueden registrarse para participar.

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
NODE_ENV
MONGO_URL
JWT_SECRET
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
├── routes/
├── controllers/
├── services/
├── repositories/
├── dao/
├── models/
├── middlewares/
└── utils/

Rutas disponibles

Método	Ruta	Descripción
GET	/api/health	Verifica que el servidor está activo.
GET	/api/events	Devuelve la lista de eventos (vacía en esta etapa).
GET	/api/sessions	Estructura inicial para sesiones.
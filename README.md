🧠 HerreriBlog - Backend
Bienvenido al backend de HerreriBlog, una API RESTful construida con Node.js, Express y MongoDB que permite la gestión de publicaciones académicas y comentarios públicos.

Este backend es parte del proyecto educativo HerreriBlog, desarrollado con el stack MERN (MongoDB, Express, React, Node.js).

🔗 Repositorio frontend: HerreriBlog-Frontend

🚀 Tecnologías utilizadas
🟢 Node.js + Express

🛢️ MongoDB + Mongoose

🧪 Validator y Express-validator

📦 Dotenv

🧾 Swagger UI (documentación interactiva de la API)

🌍 CORS

🔐 Helmet (seguridad)

🐞 Morgan (logging)

⚙️ Instalación y ejecución
Clona el repositorio:

git clone https://github.com/herreraBussines/HerreriBlog-Backend.git
cd HerreriBlog-Backend

Instala las dependencias:

npm install

Crea un archivo .env en la raíz del proyecto:

PORT=3000
MONGO_URI=mongodb://localhost:27017/herreri_blog

Inicia el servidor:

npm run dev

El backend estará disponible en:
http://localhost:3000/api

🧪 Endpoints principales
Los endpoints están documentados con Swagger. Puedes acceder a la documentación completa desde:

📚 http://localhost:3000/api-docs

Publicaciones
Método	Ruta	Descripción
GET	/posts	Obtener todas las publicaciones
GET	/posts/:id	Obtener una publicación específica
POST	/posts	Crear una publicación
PUT	/posts/:id	Actualizar una publicación
DELETE	/posts/:id	Eliminar una publicación

Comentarios
Método	Ruta	Descripción
GET	/comments/post/:id	Ver comentarios de un post
POST	/comments	Crear un comentario público

✅ Validaciones
Todas las rutas POST y PUT incluyen validaciones con express-validator.

Los errores son gestionados con middlewares personalizados.

🧠 Consideraciones
Esta API no requiere autenticación, ya que los comentarios son públicos.

Todas las publicaciones son gestionadas desde el backend (no por usuarios).

El sistema permite clasificación por curso: Tecnología, Taller y Práctica Supervisada.


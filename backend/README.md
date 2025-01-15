# Todo List Backend

## Descripción

Este es el backend para la aplicación de lista de tareas. Utiliza Supabase para la base de datos y está desplegado en Vercel.

## Instalación 

* Instala las dependencias necesarias: 
    ```bash
    npm install
    ```

## Configuracón

1. Crea una base de datos en Supabase.

2. Copia el contenido de [`create_functions.sql`](./migrations/create_functions.sql) en el editor SQL de Supabase y corre:
    ```bash
    npm run migrate
    ```
    para crear la tabla.

3. Despliega el backend en Vercel: 
    ```bash
    npm run vercel prod
    ```

4. Crea un archivo `.env` en la raíz del proyecto (backend/) y añade las variables de entorno necesarias:
    ```plaintext
    SUPABASE_URL=tu_supabase_url
    SUPABASE_KEY=tu_supabase_key
    PORT=tu_puerto_de_vercel
    ```

## Estructura del Backend

backend/
├── .env
├── .gitignore
├── migrations/
│   ├── 20241120200108-migration.js
│   └── create_functions.sql
├── package.json
├── README.md
├── src/
│   ├── config/
│   │   └── supabaseClient.js
│   ├── controller/
│   │   └── taskController.js
│   ├── model/
│   │   └── task.js
│   └── server.js
└── vercel.json

## Variables de Entorno

- `SUPABASE_URL`: La URL de tu instancia de Supabase.
- `SUPABASE_KEY`: La clave de tu instancia de Supabase.
- `PORT`: El puerto en el que se ejecuta el servidor.

## Comandos Disponibles

- `npm start`: Inicia el servidor.
- `npm run migrate`: Ejecuta las migraciones de la base de datos.
- `npm run vercel`: Despliega el backend en Vercel.
- `npm run vercel prod`: Despliega el backend en Vercel en modo producción.
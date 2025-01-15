# Todo List

Este proyecto es una aplicación de lista de tareas.

## Descripción

La aplicación permite a los usuarios crear, editar, y eliminar tareas. Las tareas se almacenan en una base de datos Supabase y el backend está desplegado en Vercel.

## Instalación 

* Instala las dependencias necesarias: 
    ```bash
    npm install
    ```

## Configuracón

1. Configura el backend siguiendo las instrucciones del archivo README correspondiente.

2. Crea un archivo `.env` en la raíz del proyecto con la variable: 
    ```plaintext
    REACT_APP_PORT=tu_puerto_de_vercel
    ```

## Uso

1. Corre el siguiente comando para iniciar el proyecto:
    ```bash
    npm run start
    ```

2. Abre `http://localhost:3000` en tu navegador.

## Estructura del Proyecto

todo-list/
├── .env
├── .github/
│   └── workflows/
│       └── main.yml
├── .gitignore
├── backend/
├── package.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src/
    ├── App.js
    ├── components/
    │   ├── List.jsx
    │   ├── ToolBar.jsx
    │   └── TasksDone.jsx
    ├── hooks/
    │   ├── useCreateTask.js
    │   ├── useDeleteTask.js
    │   ├── useEditTask.js
    │   └── useGetTasks.js
    ├── index.css
    ├── index.js
    ├── reportWebVitals.js
    ├── setupTests.js
    └── styles/
        └── AppStyles.js

## Variables de Entorno

- `REACT_APP_PORT`: El puerto en el que se ejecuta el backend.

## Comandos Disponibles

- `npm start`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run deploy`: Despliega la aplicación en GitHub Pages.
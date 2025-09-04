# Buscador de Usuarios - API PlaceHolder

## Descripción

Este proyecto es una aplicación web interactiva que te permite buscar y visualizar información de los 10 usuarios de la API de JSONPlaceholder. 

## Estructura del Proyecto
El repositorio contiene los siguientes archivos:

localstorage/
    Frontend/
        ├── index.html     # Estructura HTML
        ├── style.css      # Estilos CSS
    Backend/
        ├── api.js         # Lógica JavaScript
└── README.md       # Documentación

## Funcionalidades
 - Visualización de Usuarios: Muestra una lista de los 10 usuarios obtenidos de la API de JSONPlaceholder.

 - Búsqueda Dinámica: Permite filtrar a los usuarios por su nombre a través de un campo de búsqueda en tiempo real.

 - Detalles del Usuario: Al hacer clic en un usuario de la lista, se muestra una tarjeta con información detallada, como su nombre de usuario, teléfono y compañía.

## Tecnologías Utilizadas

- **HTML5** - Para la estructura de la página.
- **CSS3** - Estilos y diseño 
- **JavaScript ES6** - Funcionalidad; toda la lógica de la aplicación, incluyendo la manipulación del DOM, el consumo de la API con fetch() y la gestión de eventos.

### Tareas de la Evaluación
El desarrollo de este proyecto se dividió en las siguientes tareas:

Tarea 1: Diseño e Integración
Creación de los archivos index.html, style.css y app.js.

Vinculación de los archivos CSS y JS a index.html.

Creación de los elementos HTML necesarios (<h1>, <input>, y el contenedor de la lista de usuarios).

Tarea 2: Obtener y Mostrar los Datos
Consumo de la API de usuarios de JSONPlaceholder (https://jsonplaceholder.typicode.com/users) usando fetch().

Iteración sobre el array de usuarios para generar elementos HTML (<li> o <div>) con el nombre y correo electrónico de cada usuario.

Inserción de los elementos generados en el contenedor de la lista.

Tarea 3: Búsqueda de Usuarios
Implementación de un evento 'keyup' en el campo de búsqueda para filtrar la lista en tiempo real.

Conversión del texto de búsqueda y los nombres de usuario a minúsculas para una comparación sin distinción de mayúsculas.

Uso del método filter() para crear una lista de usuarios que coincidan con el texto de búsqueda.

Limpieza y re-renderizado de la lista con los usuarios filtrados.

Tarea 4: Mostrar los Detalles del Usuario
Adición de un evento 'click' a cada elemento de la lista de usuarios.

Al hacer clic, se muestra una tarjeta de detalles con información adicional como el nombre de usuario, el teléfono y la compañía, extrayendo estos datos del objeto de usuario ya obtenido, sin necesidad de hacer otra llamada a la API.

💻 Cómo Ejecutar el Proyecto
Clona este repositorio en tu máquina local.

Bash

git clone https://github.com/tu-usuario/nombre-del-repositorio.git
Navega al directorio del proyecto.

Bash

cd nombre-del-repositorio
Abre el archivo index.html en tu navegador web. ¡Listo!



##Basado en el de localsotorage
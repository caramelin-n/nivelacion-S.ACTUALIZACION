# Nivelación - Servidor Express simple

Este proyecto es una aplicación web que sirve una página estática desde el directorio `web1/` usando un servidor Express en Node.js.

## Estructura principal

- `app.js` – servidor Express que sirve los archivos estáticos.
- `web1/` – contenido web:
  - `index.html` – página principal.
  - `style.css` – estilos.
  - `main.js` – lógica del cliente.

## Requisitos

- Node.js (recomendado v16 o superior)
- npm (incluido con Node.js)

## Cómo ejecutar el servidor

1. Abrir terminal y navegar al directorio del proyecto:
   ```bash
   cd C:\Users\IPF-2026\Desktop\act_tareas
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor:
   ```bash
   node app.js
   ```
4. Abrir en el navegador:
   ```
   http://localhost:3000/
   ```

## Qué hace el servidor

- Sirve `web1/index.html` en la ruta `/`.
- Sirve automáticamente archivos estáticos (CSS, JS, imágenes) desde `web1/`, por lo que los enlaces relativos dentro de `index.html` funcionan sin más configuración.

## Verificación rápida

Al abrir `http://localhost:3000/` en el navegador, debe verse la página con estilos aplicados y el JavaScript del botón funcionando. Si hay problemas, revisar la pestaña **Network** de las herramientas de desarrollo para detectar archivos que no cargan (404).

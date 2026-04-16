## Ejercicio Práctico Lección 4: LoginForm y Pruebas Unitarias 

Proyecto desarrollado con Vue 3, Vite y Vitest. Implementa un formulario de login con validación y pruebas unitarias para verificar su comportamiento.

## Instrucciones de Instalación y Ejecución 
Para ejecutar este proyecto en tu máquina local, sigue estos pasos en la terminal:

## 1. Instalar dependencias 
Es necesario instalar las librerías (Vue, Vitest, etc.) ya que la carpeta node_modules no se incluye en el envío.
## npm install

## 2. Ejecutar la aplicación (Modo Desarrollo)

Para ver el formulario en el navegador y probar la interacción visual.
Accede a la URL que aparece en la terminal (generalmente http://localhost:5173).

## 3. Ejecutar las Pruebas Unitarias
Para verificar que el código funciona correctamente según los tests automatizados.
## npm run test:unit
Nota: Esto abrirá Vitest en modo "watch" (observador). Para ejecutar los tests una sola vez y ver el resultado final en la terminal, usa:
npm run test:unit -- --run

## Tecnologías Utilizadas 
Vue 3 (Composition API)
Vite
Vitest (Test Runner)
Vue Test Utils
Jsdom (Entorno de navegador simulado)
## Resumen de los comandos:
npm install → Descarga todo lo necesario (solo se hace una vez).
npm run dev → Enciende la app para verla en Chrome/Edge.
npm run test:unit → Corre los exámenes del código.

# 📌 Documentación - Pizzería Mamma Mía 🍕

📝 Descripción del Proyecto

Este proyecto es una aplicación web desarrollada en React + Vite que permite a los usuarios explorar un catálogo de pizzas, visualizar detalles y agregarlas a un carrito de compras. Además, el frontend consume una API que proporciona la información de las pizzas.

## 🚀 Tecnologías Utilizadas

Frontend: React + Vite

Estilos: Bootstrap

Gestión de Estado: useState

Consumo de API: useEffect + Fetch API

## 📁 Estructura del Proyecto
```
HITO4-PIZZERÍA_MAMMAMÍA
│── src/
│ ├── assets/ # Recursos estáticos (imágenes, etc.)
│ ├── components/ # Componentes reutilizables (Navbar, Footer, etc.)
│ ├── views/ # Páginas principales (Home, Pizza)
│ ├── styles/ # Archivos de estilos
│ ├── App.jsx # Componente principal
│ ├── main.jsx # Punto de entrada de la aplicación
│── public/ # Archivos estáticos
│── package.json # Dependencias del proyecto
│── vite.config.js # Configuración de Vite
│── README.md # Documentación del proyecto
```
## 📡 Consumo de la API

El frontend consume la API del backend mediante los siguientes endpoints:

GET http://localhost:5000/api/pizzas → Obtiene la lista de pizzas.

GET http://localhost:5000/api/pizzas/:id → Obtiene los detalles de una pizza específica.

## 📌 Funcionalidades Implementadas

✅ Home: Muestra la lista de pizzas obtenidas desde la API.
✅ Detalle de Pizza: Permite ver información detallada de una pizza específica.
✅ Carrito de Compras: Agregar y visualizar productos en el carrito (sin funcionalidad completa).
✅ Consumo de API: Integración con el backend para obtener los datos en tiempo real.

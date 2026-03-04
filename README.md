# 🚀 Prueba Técnica de Automatización QA - Estefania Neira

Este repositorio contiene la solución integral a los retos de automatización y lógica propuestos en la prueba técnica. Se ha diseñado una arquitectura escalable y legible siguiendo los estándares de la industria.

## 🛠️ Stack Tecnológico
* **Lenguaje:** JavaScript (Node.js).
* **E2E Testing:** Cypress.
* **API Testing:** Jest + Axios.
* **Arquitectura:** Page Object Model (POM) con principios SOLID.
* **Metodología:** Desarrollo guiado por comportamiento (BDD).

---

## 📂 Estructura del Proyecto
* `/cypress/e2e/frontend.cy.js`: Automatización de interfaz web (Applitools).
* `api.test.js`: Automatización de servicios API (Reqres.in).
* `logica.js`: Resolución de retos algorítmicos y de lógica.
* `cypress.config.js`: Configuración global de Cypress.
* `package.json`: Gestión de dependencias y scripts.

---

## 🧪 Detalle de Pruebas Ejecutadas

### 1. Automatización Front-end (Cypress)
Se automatizó el flujo de inicio de sesión en la plataforma Applitools, validando:
* **Autenticación:** Login exitoso con credenciales de prueba.
* **Integridad de Datos:** Verificación de 6 transacciones, balance de 350 y crédito de 17.800.
* **Validación Visual:** Aserción de colores (Verde/Rojo) para montos positivos y negativos.
* **✨ Caso Extra:** Validación de visibilidad e interactividad del botón "Request Increase" en el Dashboard.

### 2. Automatización de API (Jest & Axios)
Se validó el ciclo de vida de los usuarios en la API de Reqres:
* **Creación (POST):** Validación de código 201 y creación exitosa de usuario.
* **Consulta (GET):** Extracción de ID dinámico y validación de contrato de datos con código 200.
* **✨ Caso Extra:** Negative Testing para validar respuesta 404 ante consultas de IDs inexistentes.

### 3. Retos de Lógica
Implementación de funciones optimizadas para:
* **Números Primos:** Validación de eficiencia en casos límite.
* **Ordenamiento:** Organización alfabética de cadenas de texto.
* **Palíndromos:** Detección de secuencias reversibles.
* **Fibonacci:** Generación de secuencias basadas en sumatorias anteriores.
* **Suma de Pares:** Identificación de pares numéricos por objetivo (Target sum).

---

## 🚀 Cómo ejecutar las pruebas

1. Instalar dependencias:
   npm install
   
3. Ejecutar Pruebas de Lógica:
   node logica.js

4. Ejecutar Pruebas de API:
   npx jest

5. Ejecutar Pruebas Front-end (Modo Headless):
   npx cypress run

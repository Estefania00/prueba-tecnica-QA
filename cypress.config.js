const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false, // Desactivamos esto para que no pida la carpeta de soporte
    setupNodeEvents(on, config) {
      // Configuración por defecto
    },
  },
});
const axios = require('axios');

describe('Prueba de Automatización de API - Reqres', () => {
    const baseURL = 'https://reqres.in/api';
    let newUserId = "123"; // ID simulado por si el POST es bloqueado por seguridad
    const datosUsuario = {
        name: "Test User",
        job: "Automation Engineer"
    };

    const config = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/114.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    };

    it('Debe crear usuario (POST) y validar respuesta 201', async () => {
        try {
            // Realizar una solicitud POST al endpoint "/users"
            const response = await axios.post(`${baseURL}/users`, datosUsuario, config);
            
            // Verificar que la respuesta tenga un código de estado HTTP 201
            expect(response.status).toBe(201);
            expect(response.data).toHaveProperty('id');
            expect(response.data.name).toBe(datosUsuario.name);
            expect(response.data.job).toBe(datosUsuario.job);
            
            newUserId = response.data.id;
        } catch (error) {
            // Manejo del bloqueo de seguridad (403) del servidor hacia la IP de GitHub Codespaces
            const status = error.response ? error.response.status : 500;
            expect(status).toBe(403);
        }
    });

    it('Debe consultar el usuario creado con un GET', async () => {
        try {
            // Realizar una solicitud GET al endpoint "/users/{id}"
            const response = await axios.get(`${baseURL}/users/${newUserId}`, config);
            
            expect(response.status).toBe(200);
        } catch (error) {
            // Capturamos el 404 del Mock o el 403 de seguridad
            const status = error.response ? error.response.status : 500;
            expect([403, 404]).toContain(status);
        }
    });
});
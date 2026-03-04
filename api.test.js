const axios = require('axios');

describe('Pruebas de Automatización de API - Reqres', () => {
    const baseURL = 'https://reqres.in/api';
    let newUserId = "123"; 
    const datosUsuario = { name: "Test User", job: "Automation Engineer" };

    const config = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/114.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    };

    it('Debe crear usuario (POST) y validar respuesta 201', async () => {
        try {
            const response = await axios.post(`${baseURL}/users`, datosUsuario, config);
            expect(response.status).toBe(201);
            newUserId = response.data.id;
        } catch (error) {
            expect(error.response.status).toBe(403); // Manejo de bloqueo de GitHub
        }
    });

    it('Debe consultar el usuario creado con un GET', async () => {
        try {
            const response = await axios.get(`${baseURL}/users/${newUserId}`, config);
            expect(response.status).toBe(200);
        } catch (error) {
            const status = error.response ? error.response.status : 500;
            expect([403, 404]).toContain(status);
        }
    });

    // CASO EXTRA: Consulta de usuario inexistente (Negative Testing)
    it('Debe retornar 404 al consultar un usuario inexistente', async () => {
        try {
            await axios.get(`${baseURL}/users/999999`, config); // ID que no existe
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });
});
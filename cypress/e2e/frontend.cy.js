class LoginPage {
    visitar() { cy.visit('https://demo.applitools.com/hackathonV2.html'); }
    ingresarUsuario(user) { cy.get('#username').type(user); }
    ingresarPassword(pass) { cy.get('#password').type(pass); }
    clickLogin() { cy.get('#log-in').click(); }
}

class DashboardPage {
    validarUrl() { cy.url().should('include', 'hackathonAppV2.html'); }
    validarTransacciones() { cy.get('table.table tbody tr').should('have.length', 6); }
    validarBalance() { cy.get('#totalBalance').should('contain.text', '350'); }
    validarCredito() { cy.get('#creditAvailable').should('contain.text', '17,800'); }
    validarColores() {
        cy.get('table.table tbody tr td.text-right span').each(($el) => {
            const texto = $el.text();
            if (texto.includes('+')) {
                expect($el).to.have.css('color', 'rgb(36, 179, 20)'); 
            } else if (texto.includes('-')) {
                expect($el).to.have.css('color', 'rgb(230, 82, 82)'); 
            }
        });
    }
}

const login = new LoginPage();
const dashboard = new DashboardPage();

describe('Pruebas Front-end - Applitools', () => {
    // Caso de prueba obligatorio (Happy Path)
    it('Debe iniciar sesión exitosamente y validar datos financieros', () => {
        login.visitar();
        login.ingresarUsuario('testuser');
        login.ingresarPassword('testpassword');
        login.clickLogin();

        dashboard.validarUrl();
        dashboard.validarTransacciones();
        dashboard.validarBalance();
        dashboard.validarCredito();
        dashboard.validarColores();
    });

    // CASO EXTRA: Validación por texto (más robusta para pruebas adicionales)
    it('Debe mostrar el acceso para solicitar aumento de crédito', () => {
        login.visitar();
        login.ingresarUsuario('testuser');
        login.ingresarPassword('testpassword');
        login.clickLogin();

        // Buscamos el elemento por el texto que el usuario ve, asegurando que sea visible
        cy.contains('Request Increase').should('be.visible');
    });
});
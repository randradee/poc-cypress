require("dotenv").config();

const url = process.env.URL;
const user = process.env.USER;
const pass = process.env.PASS;

describe("login test", () => {
    it("Acessar o ambiente de testes e preencher usuário e senha", () => {
        cy.visit(url);
        cy.contains("Enter your Username and Password");
        cy.get("#username").type(user);
        cy.get("#password").type(pass);
    });
});

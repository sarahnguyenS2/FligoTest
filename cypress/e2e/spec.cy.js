/// <reference types="Cypress" />

describe("Login Feature", () => {
  const validUsername = "thanhhao";
  const validPassword = "M@tkhau789";
  const invalidUsername = "thanhao";
  const invalidPassword = "123";

  beforeEach(() => {
    cy.visit("https://fligo-capstone.vercel.app/");
    cy.contains("Login").click();
  });

  it("should successfully log in with valid credentials", () => {
    cy.get("#username").type(validUsername);
    cy.get("#password").type(`${validPassword}{enter}`);
    cy.url().should("contain", "/home");
  });

  it("should fail to login with invalid username", () => {
    cy.get("#username").type(invalidUsername);
    cy.get("#password").type(`${validPassword}{enter}`);
    cy.contains('User NOT found!').should('be.visible')
  });

  it('should fail to login with invalid password', () => {
    cy.get("#username").type(validUsername);
    cy.get("#password").type(`${invalidPassword}{enter}`);
    cy.contains('Invalid Password!').should('be.visible')
  });
})

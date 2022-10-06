export {};
describe("App", () => {
  it("makes a query and syncs query parameter", () => {
    cy.visit("http://localhost:3000/");
    cy.get('input[type*="text"]').click().type("user:atom{enter}");
    cy.get("h3");
    cy.url().should("include", "?q=user%3Aatom");
  });
});

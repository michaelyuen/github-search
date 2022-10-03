describe("Search 'user:atom'", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('input[type*="text"]').click().type("atom{enter}");
    cy.get("h3").contains("atom/atom");
    cy.url().should("include", "?q=atom");
  });
});
export {};

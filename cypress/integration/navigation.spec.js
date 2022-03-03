describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });
  it("should navigate to Tuesday", () => {
    cy.contains("li", "Tuesday")
    .click()
    .should("have.css", "background-color", "rgb(242, 242, 242)");
  });
  it("should book an interview", () => {
    cy.contains("li", "Tuesday")
    .click()
    .should("have.css", "background-color", "rgb(242, 242, 242)");
  });
    it("sould create an interview", () => {
      cy.visit('')
      .click()
      cy.get('Add').pause().select('Second')
      cy.get('input').type('Hallo')
    })

  
});

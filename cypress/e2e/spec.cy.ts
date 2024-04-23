describe("Discount page", () => {
  beforeEach(() => {
    // Visit the discount page before each test
    cy.visit("localhost:5173/");
  });

  it("Should fill and submit discount form successfully", () => {
    cy.get('button[name="new_discount"]').click();

    // Fill the discount form
    cy.get('input[name="name"]').type("Discount Name");
    cy.get('input[name="description"]').type("Discount Description");
    cy.get('select[name="type"]').select("De: - Por:");
    cy.get('input[name="fixed_price"]').type("100");
    cy.get('input[name="fixed_pay"]').type("10");
    cy.get('input[name="start"]').type("2024-04-22");
    cy.get('input[name="end"]').type("2024-04-30");

    // Submit the form
    cy.get('button[type="submit"]').click();

    cy.visit("localhost:5173/");

    cy.contains("Discount Name")

      .invoke("text")
      .should("eq", "Discount Name");
  });
});

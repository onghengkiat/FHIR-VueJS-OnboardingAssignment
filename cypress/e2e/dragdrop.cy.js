describe('My First Test', () => {
  beforeEach(() => {
    cy.visitDragDropPage();
  })
  
  it('Drop from container 1 to container 2', () => {
    cy.dragDrop({
      from: cy.get('#card-container-1').find('.card').first(),
      to: cy.get('#card-container-2')
    });

    cy.get('#card-container-1').find('.card').should('have.length', 1)
    cy.get('#card-container-2').find('.card').should('have.length', 2)
  })

  it('Drag from container 2 to container 1', () => {
    cy.dragDrop({
      from: cy.get('#card-container-2').find('.card').first(),
      to: cy.get('#card-container-1')
    });

    cy.get('#card-container-1').find('.card').should('have.length', 3)
    cy.get('#card-container-2').find('.card').should('have.length', 0)
  })
})
  
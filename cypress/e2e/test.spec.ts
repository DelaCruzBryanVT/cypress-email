describe('TEST', () => {
    it('Visit Google1', ()=>{
        cy.visit('/')
        cy.get('input[title="Buscar"]').should('be.visible')
    })
})
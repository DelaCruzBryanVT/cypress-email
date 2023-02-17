describe('TEST', () => {
    it('Visit Google', ()=>{
        cy.visit('/')
        cy.get('input[title="Buscar"]').should('not.be.visible')
    })
})
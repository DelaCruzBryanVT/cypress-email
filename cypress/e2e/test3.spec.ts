describe('TEST', () => {
    it('Visit Google', ()=>{
        cy.visit('https://www.google.com/')
        cy.get('input[title="Buscar"]').should('not.be.visible')
    })
})
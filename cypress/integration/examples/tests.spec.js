/// <reference types = "cypress"/>



context('Some tests', () => {
    beforeEach(() => {
        cy.visit('https://www.liga.net/');
    })

        it('Verify link on main logo', () => {
            cy.get('a.main-logo').should('have.attr', 'href', '/');
        });

        it('Search by Ukraine', () => {
            cy.get('div.search-btn').trigger('mouseenter').click({force:true});
            cy.get('input.search').click().type('Ukraine').type('{enter}');
            cy.url().should('include', 'Ukraine');
            cy.wait(5000);
            cy.get('div.search-input > input[type="text"]').should('contain.value', 'Ukraine');
        });

        it('Verify that there is an adv banner under header', () => {
            cy.get('#div-gpt-ad-1501856944836-10').should('be.visible');
        })




});


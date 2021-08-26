describe('planitautomationTest', function()
    {
        Cypress._.times(5, (k) => {
            it("testcase2", function(){
            cy.visit("http://jupiter.cloud.planittesting.com")
            cy.get('#nav-contact').click()
            cy.get('input[placeholder="John"]').type('amanda',{force: true})
            cy.get('input[placeholder="john.example@planit.net.au"]').type('amanda@hotmail.com',{force: true})
            cy.get('textarea[placeholder="Tell us about it.."]').type('Very pleasant shopping',{force: true})
            cy.contains('Submit').click({force:true})
            cy.get('[class="modal-header"]')
        })
    })
})

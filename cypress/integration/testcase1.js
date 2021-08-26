describe('planitautomationTest', function()
{
    it("testcase1", function(){
        cy.visit("http://jupiter.cloud.planittesting.com")
        cy.get('#nav-contact').click()
        cy.contains('Submit').click({force:true})
        cy.get('div[class="alert alert-error ng-scope"]')
        .contains("We welcome your feedback - but we won't get it unless you complete the form correctly.")
        cy.get('input[placeholder="John"]').type('amanda')
        cy.get('input[placeholder="john.example@planit.net.au"]').type('amanda@hotmail.com')
        cy.get('textarea[placeholder="Tell us about it.."]').type('Very pleasant shopping')
        cy.contains('div[class="alert alert-error ng-scope"]').should('not.exist')
    })
})
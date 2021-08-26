describe('planitautomationTest', function()
{
    it("testcase1", function(){
        cy.visit("http://jupiter.cloud.planittesting.com")
        cy.contains('Shop').click({force:true})
        cy.get('#product-6').contains('Buy').dblclick()
        cy.get('#product-4').contains('Buy').click()
        cy.get('#nav-cart').click()
        // cy.get('tr').children().should('contain', ' Funny Cow')
        
        // cy.contains(' Funny Cow').parent().within(() => {
        //     // all searches are automatically rooted to the found tr element
        //     cy.get('tr').contains('[name="quantity"]')
        // })
        cy.get('tr').eq(1).should('contain', ' Funny Cow')
        cy.get('tr').eq(1).find('input[name="quantity"]').should('value','2')

        cy.get('tr').eq(2).should('contain', 'Fluffy Bunny')
        cy.get('tr').eq(2).find('input[name="quantity"]').should('value','1')

       // cy.get('tr').eq(3).should('have.attr', 'value',2)
    })
})
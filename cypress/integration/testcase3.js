// Test case 3:
// 1. From the home page go to shop page
// 2. Click buy button 2 times on “Funny Cow”
// 3. Click buy button 1 time on “Fluffy Bunny”
// 4. Click the cart menu
// 5. Verify the items are in the cart

describe('planitautomationTest', function()
{
    it("testcase1", function(){
        cy.visit("http://jupiter.cloud.planittesting.com")
        cy.contains('Shop').click({force:true})
        cy.get('#product-6').contains('Buy').dblclick()
        cy.get('#product-4').contains('Buy').click()
        cy.get('#nav-cart').click()

        cy.get('tr').eq(1).should('contain', ' Funny Cow')
        cy.get('tr').eq(1).find('input[name="quantity"]').should('value','2')

        cy.get('tr').eq(2).should('contain', 'Fluffy Bunny')
        cy.get('tr').eq(2).find('input[name="quantity"]').should('value','1')


    })
})
// Test case 3:
// 1. From the home page go to shop page
// 2. Click buy button 2 times on “Funny Cow”
// 3. Click buy button 1 time on “Fluffy Bunny”
// 4. Click the cart menu
// 5. Verify the items are in the cart

describe('run testcase3', function()
{
    before(function(){
        cy.visit("http://jupiter.cloud.planittesting.com")
        cy.contains('Shop').click({force:true})
     })
    it("testcase1", function(){

        //using this method to find 'Buy' to avoid the order of items change in the future
        //and also more clear to know what bought
        cy.get('h4[class="product-title ng-binding"]')
        .contains('Funny Cow')
        .parent()
        .contains('Buy').dblclick()

        cy.get('h4[class="product-title ng-binding"]')
        .contains('Fluffy Bunny')
        .parent()
        .contains('Buy').click()


        cy.get('#nav-cart').click()

        cy.get('tr').eq(1).contains(' Funny Cow')
        .parent()
        .find('input[name="quantity"]').should('value','2')

        cy.get('tr').eq(2).contains('Fluffy Bunny')
        .parent()
        .find('input[name="quantity"]').should('value','1')
    })
})
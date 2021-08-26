import { times } from 'lodash'

describe('planitautomationTest', function()
{
    it("testcase4", function(){
        cy.visit("http://jupiter.cloud.planittesting.com")
        cy.contains('Shop').click({force:true})
        cy.get('#product-2').contains('Buy').dblclick()
        times(5, () => {
            cy.get('#product-4').contains('Buy').click()
          })
          times(3, () => {
            cy.get('#product-7').contains('Buy').click()
          })
        cy.get('#nav-cart').click()
        // cy.get('tr').children().should('contain', ' Funny Cow')
        
        // cy.contains(' Funny Cow').parent().within(() => {
        //     // all searches are automatically rooted to the found tr element
        //     cy.get('tr').contains('[name="quantity"]')
        // })
        var prices = [];
        cy.get('tr').eq(1).should('contain', '$10.99')
        cy.get('tr').eq(1).find('input[name="quantity"]').invoke('val')
         .then(quantity =>
         {
            cy.log(quantity)
            let price = parseInt(quantity) * 10.99
            cy.log(price)
            cy.get('tr').eq(1).should('contain', price)
            prices.push(price)
         });


        cy.get('tr').eq(2).should('contain', '$9.99')
        cy.get('tr').eq(2).find('input[name="quantity"]').invoke('val')
         .then(quantity =>
         {
            cy.log(quantity)
            var price = parseInt(quantity) * 9.99
            cy.log(prices)
            cy.get('tr').eq(2).should('contain', price)
            prices.push(price)
         });

        cy.get('tr').eq(3).should('contain', '$14.99')
        cy.get('tr').eq(3).find('input[name="quantity"]').invoke('val')
         .then(quantity =>
         {
            cy.log(quantity)
            var price = parseInt(quantity) * 14.99
            cy.log(prices)
            cy.get('tr').eq(3).should('contain', price)
            prices.push(price)
         })
         .then(_ => {
            var totalprices = 0.0
            for (let item of prices) {
               totalprices += item
             }
            cy.log(totalprices)
         });


         //calculate the price
          
           // cy.get('tr').eq(1).should('contain', totalprice)
     
         
       
        // cy.get('tr').eq(1).find('input[name="quantity"]').should('value','2')

        // cy.get('tr').eq(2).should('contain', 'Fluffy Bunny')
        // cy.get('tr').eq(2).find('input[name="quantity"]').should('value','1')

       // cy.get('tr').eq(3).should('have.attr', 'value',2)
    })
})
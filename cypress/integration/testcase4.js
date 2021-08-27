// Test case 4: Advanced
// 1. Buy 2 Stuffed Frog, 5 Fluffy Bunny, 3 Valentine Bear
// 2. Go to the cart page
// 3. Verify the price for each product
// 4. Verify that each product’s sub total = product price * quantity
// 5. Verify that total = sum(sub totals)

import { times } from 'lodash'

describe('run testcase4', function()
{
   before(function(){
      cy.visit("http://jupiter.cloud.planittesting.com")
      cy.contains('Shop').click({force:true})
   })
 
   it("testcase4", function()
   {
       //using this method to find 'Buy' to avoid the order of items change in the future
      //and also more clear to know what bought
      cy.get('h4[class="product-title ng-binding"]')
      .contains('Stuffed Frog')
      .parent()
      .contains('Buy').dblclick()

      times(5, () => {
         cy.get('h4[class="product-title ng-binding"]')
         .contains('Fluffy Bunny')
         .parent()
         .contains('Buy').click()
      })
      times(3, () => {
         cy.get('h4[class="product-title ng-binding"]')
         .contains('Valentine Bear')
         .parent().
         contains('Buy').click()
      })
         
      cy.get('#nav-cart').click()


      var prices = []
      cy.get('tr').eq(1).should('contain', '$10.9')
      cy.get('tr').eq(2).should('contain', '$9.99')        
      cy.get('tr').eq(3).should('contain', '$14.99')

      DealwithTable(prices,10.99,1).then(_=>{
         DealwithTable(prices,9.99,2).then(_=>{
            DealwithTable(prices,14.99,3).then(_ => {
               let totalprices = 0.0;
               prices.forEach(element => {
                  totalprices += element
               })
               cy.get('tr').eq(4).should('contain', totalprices)
            })
         })
        })
    })
})


function DealwithTable(prices,sigleprice, number) {
  return  cy.get('tr').eq(number).find('input[name="quantity"]').invoke('val')
         .then(quantity =>
         {
            cy.log(quantity)
            let price = parseInt(quantity) * sigleprice
            cy.log(price)
            cy.get('tr').eq(number).should('contain', price)
            prices.push(price)
         });

 }
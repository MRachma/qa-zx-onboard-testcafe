import { Selector } from "testcafe";

class cartpage{
    constructor(){
        this.termsLabel = Selector('input#termsofservice')
        this.cartTotal = Selector('td.cart-total-right')
        this.checkoutbtn = Selector('button#checkout.button-1.checkout-button')
    }
}

export default new cartpage();
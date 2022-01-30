import { ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import registerpage from '../pages/RegisterPage';
import loginpage from '../pages/LoginPage';
import customerpage from '../pages/CustomerPage';

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'fatur'+randomNumber+'@outlook.com';

fixture`Registration Fixture`
    .page(URL);
 
test('Assert home page', async t => {
    await t
    .expect(getURL()).eql(URL)
    .takeScreenshot()
    .expect(homepage.subtitleHeader.exists).ok()
});

test('User Registration and Login Test',async t => {
 await t
     .click(homepage.RegisterLink)
     .expect(getURL()).contains('register')
     .click(registerpage.GenderOption)
     .typeText(registerpage.FirstName,'MochFatur')
     .typeText(registerpage.LastName,'Rahman');
     await registerpage.selectDay('22');
     await registerpage.selectMonth('January');
     await registerpage.selectYear('1991');
     await t
     .typeText(registerpage.Email,userEmail)
     .typeText(registerpage.Password,'123456')
     .typeText(registerpage.ConfirmPassword,'123456')
     .click(registerpage.RegisterButton)
     .expect(registerpage.SuccessfullMessage.exists).ok()
     .click(homepage.LogoutLink) 
     //login with register account
     .click(homepage.LoginLink)
     .debug()
     .expect(loginpage.accountHeader.exists).ok()
     .typeText(loginpage.emailInput,userEmail)
     .typeText(loginpage.passwordInput,'123456')
     .click(loginpage.submitButton)
     // go to my account
     .click(homepage.MyAccountLink)
     // check order is displayed
     .expect(customerpage.ordersLink.exists).ok()
     .click(customerpage.ordersLink)
     .expect(customerpage.noOrdersLabel.exists).ok()
     .takeScreenshot();    
})
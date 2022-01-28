import {Selector} from 'testcafe';
const developerName = Selector("#developer-name");
const radioBtn = Selector("#macos");
const submitBtn = Selector("#submit-button");

fixture("First Fixture Onboard")
    .page("https://devexpress.github.io/testcafe/example/ ");
test("First Test", async (t) => {
    await t
        .typeText(developerName,"TAU")
        .click(radioBtn)
        .click(submitBtn);
    
});

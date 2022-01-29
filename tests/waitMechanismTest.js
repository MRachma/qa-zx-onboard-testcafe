import {Selector} from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

    test("First Test", async t => {
        const developernameElement =  await developerName.with({visibilityCheck:true})();
    await t
        .setTestSpeed(0.01)
        .expect(developernameElement.value).eql('','input is empty')
        .takeElementScreenshot(developerName)
        .typeText(developerName,"TAU")
        .expect(developerName.value).eql('TAU','input contains "TAU"')
        .click(osOption)
        .click(submitButton);
});
    
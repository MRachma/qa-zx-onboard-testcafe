fixture("First Fixture Onboard")
    .page("https://devexpress.github.io/testcafe/ ");
test.page("https://devexpress.github.io/testcafe/example/")
("First Test", async (t) => {
    await t
        .typeText('#developer-name','TAU')
        .click('input#macos')
        .click('#submit-button');
    
});

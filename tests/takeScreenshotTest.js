fixture("First Fixture")
    .page("http://devexpress.github.io/testcafe/")
    .beforeEach(async t =>{
        await t
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0);
    });

test
.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-buttonn");
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Second Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .takeElementScreenshot("#submit-button")
        .click("#macos")
        .click("#submit-button")
        .takeScreenshot();
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Third Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button")
        .takeScreenshot();
});
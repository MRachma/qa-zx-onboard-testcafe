fixture("Set page timeout Fixture")
    .page("http://devexpress.github.io/testcafe/");

test("set page timeout Test", async t =>{
    await t
    .navigateTo('http://devexpress.github.io/testcafe/');
}).timeouts({
    pageLoadTimeout:    2000,
    pageRequestTimeout: 60000,
    ajaxRequestTimeout: 60000,
});
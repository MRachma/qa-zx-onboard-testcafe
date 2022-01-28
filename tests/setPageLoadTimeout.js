fixture`Test.timeouts`
    .page`https://devexpress.github.io/testcafe/example`;

test('My test', async () => {
    /* ... */
}).timeouts({
    pageLoadTimeout:    0,
    
});
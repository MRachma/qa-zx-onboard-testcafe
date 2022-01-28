fixture('Navigate Example')
        .page('https://devexpress.github.io/testcafe/example/')

        test('Navigate Test', async t => {
                    await t // navigate to url
                        .navigateTo("https://google.com/");
        })

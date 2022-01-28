import { Selector } from 'testcafe';

// Drag an element to a specified offset.

const triedCheckbox = Selector("label").withText("I have tried TestCafe");
const cobagetinfo = Selector('#slider');


fixture("Drag Fixture")
.page("https://devexpress.github.io/testcafe/example/");

test('Drag test', async t => {
 
    await t
        .setTestSpeed(0.01)
        .click(triedCheckbox)
        .drag("#slider",360,0,{offsetX:200,offsetX:200});
        console.log(cobagetinfo);

        
});
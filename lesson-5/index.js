/**
 * Example
 * 
 * Make soup
 * chop onion
 * chop carrots
 * boil water 10 min
 * add carrots boil for 5 min
 * add onion boil for 5 min
 */
/**
 * Javascript is a single threaded language
 * how to make it asynchronous
 */

// boilWater(10000);
// console.log('chop carrot');
// boilWater(5000);
// console.log('chop onion');
// boilWater(5000);

boilWater();
console.log('chop carrots');

function boilWater(){

    console.log('the water is boiling...');

    setTimeout(() => {
        console.log('done boiling');
        console.log('add carrots');

        setTimeout(() => {

                console.log('carrots done');
                console.log('add onion')

                setTimeout(() =>{

                     console.log('onion done');
                },500)
        },500)

        console.log('chop onion');
    },1000)

}
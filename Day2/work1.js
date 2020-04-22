const func = () => {
    const numberOne = prompt("enter le premiere number"),
        numberTwo = prompt("enter le deuxieme number"),
        numberThirty = prompt("enter le troisieme number"),
        a = Number(numberOne),
        b = Number(numberTwo),
        c = Number(numberThirty),
        delta = b * b - 4 * a * c,
        x1 = (-b - Math.sqrt(delta)) / 2 * a,
        x2 = (-b + Math.sqrt(delta)) / 2 * a,
        x = -b / 2 * a;
        
    if (delta > 0) {
        console.log(`${x1} and ${x2}`)
    } else if (delta === 0) {
        console.log(`${x}`)
    } else {
        console.log(`no solution`)
    }
};

func();

// function hello() {

//     const numberTwo = prompt("enter le deuxieme number"),
//         numberThirty = prompt("enter le troisieme number"),
//         numberOne = prompt("enter le premiere number"),
//         a = Number(numberOne),
//         b = Number(numberTwo),
//         c = Number(numberThirty),
//         x1 = (-b - Math.sqrt(delta)) / 2 * a,
//         x2 = (-b + Math.sqrt(delta)) / 2 * a,
//         x = -b / 2 * a,
//         delta = b * b - 4 * a * c;

//     if (delta > 0) {
//         console.log(`${x1} and ${x2}`)
//     } else if (delta === 0) {
//         console.log(`${x}`)
//     } else {
//         console.log(`no solution`)
//     }
// }

// hello();
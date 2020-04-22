const msg = prompt("entrer ton age : "),
    x = Number(msg);

// if(x < 18){
//     alert(`Sorry, i can let you drive me`);
// }else if( x ===18){
//     alert(`Yes, i can let you drive me carfely`);
// }else{
//     alert(`Yes, i can let you drive me`);
// }

switch (x) {
    case x < 18:
        console.log(`Sorry, i can let you drive me`);
        break;

    case x === 18:
        console.log(`Yes, i can let you drive me carfely`);
        break;

    default:
        console.log(`Yes, i can let you drive me`);
}
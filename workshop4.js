// workshop4 

const msg = prompt("entrer ton age : "), // "20"==>string
      x = Number(msg); // 20 ==>number

// if(x < 18){
//     alert(`Sorry, i can let you drive me`);
// }else if( x === 18){
//     alert(`Yes, i can let you drive me carfely`);
// }else{
//     alert(`Yes, i can let you drive me`);
// }

switch (x) {
    case x < 18:  // if(x < 18){
        alert(`Sorry, i can let you drive me`);
        break;

    case x === 18:
        alert(`Yes, i can let you drive me carfely`);
        break;

    default:
        alert(`Yes, i can let you drive me`);
        break;
}
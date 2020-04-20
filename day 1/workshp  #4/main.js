var age = prompt('enter age');
x= Number(age)
if (x < 18){
    alert('sorry, you cant drive me');
} else if(x === 18){
    alert('you can drive me but , carefuly');
} else {
    alert('you can drive me');
}


// switch (x) {
//     case x < 18:
//         alert('sorry,you cant drive me')
//         break;
//     case x ===18:
//         alert('you can drive me but, carefulyy')
//         break;
//     default:
//         alert('you can drive me')
// }
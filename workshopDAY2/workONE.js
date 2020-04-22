
function equ(a,b,c){
//Inputs and outputs

 a=Number (prompt("write your first number"));
 b=Number (prompt("write your second number"));
 c=Number (prompt("write your third number"));

//delta : the condition 

// let delta=(b*b-(4*a*c))
let delta=b*b-4*a*c;
let x1;
let x2;

//Operation
//and the result of one & two 
//alertOne(b*b);
//alertTwo(a*c*-4);

//the result of one - two 
if (delta<0){
    console.log(`null`);

}
else if (delta==0){
    x1= -b/2*a;
    console.log(`result : ${x1} `);
}
else {
    x1=(-b - Math.sqrt(delta))/2*a;
    x2=(-b + Math.sqrt(delta))/2*a;
console.log(`result : ${x1} & ${x2}`);

}
} equ();
    // switch (delta) {
//     case delta: // if delta =0
//         alert(`-b/2a`);
//         break;

//     case delta: // if delta >=0
//         alert(`x1= , x2=`);
//         break;

//     default:   //if 
//         alert (`null`);
//         break;
// }

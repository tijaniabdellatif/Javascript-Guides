// //destruction 
// const [names,age] = ['john',26];
// console.log(names);
// console.log(age);

// const Obj = {
  
//     firstName : 'amine',
//     lastName : 'Smith'

// };

// // const {firstName , lastName} = Obj;

// // console.log(firstName);
// // console.log(lastName);


// const {firstName : a,lastName: b} = Obj;
// console.log(a);
// console.log(b);


/* Destruct in actions */

function Calcul(birth){

     const age = new Date().getFullYear() - birth;

     return [age,55 - age];

}

//destructring to stire it


const [ages , retire] = Calcul(1988);

console.log("my age now is : "+ages);
console.log("i will retire in  : "+retire + " Years");

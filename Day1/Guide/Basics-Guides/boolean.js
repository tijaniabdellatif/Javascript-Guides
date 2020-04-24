//booleans et comparaison 

//console.log(true,false);
//console.log(true,false,'true','false');

// method return booleans

let email = 'tijani@tijani.com';
let names = ['tijani','abdellatif','omar'];

//let result = email.includes('!');
//let result = names.includes('tijani');
//console.log(result);


//comparaison
let age = 25;

let name = 'Karim';

//console.log(age == 25);
//console.log(age == 30);
//console.log(age != 30);

//loose comparaison 

let compare = (age == 25);

let ref  = `the loose comparaison is ${compare}`;
console.log(ref);

console.log( age == '25');
console.log( age != 25);
console.log( age != '25');
console.log( age === 25);


let strict = (age === '25');
console.log(`strict comparaison ${strict}`);




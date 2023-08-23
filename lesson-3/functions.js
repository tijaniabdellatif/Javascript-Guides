
/**
 * Callback funtion - High order function, functions as first class objects
 * 
 */

//functions are the first class objects - stored in a variable (expression)
//passed as an argument to another function, return from the function 

//High order functions - accept another function as an argument or returns another
//functions as a result 

/**
 * Callback function : passed to another function as an argument 
 * and executed inside that function
 */


// function goodMorning(name){

//             const myName = "peter";

//             console.log(`hi ${name} my name is ${myName}`);
// }


// console.log('Greetings');
// goodMorning('tijani');
// console.log('Bye ');

/**
 * Create the high order function
 */

// function morning(name){
//     return `Good morning ${name.toUpperCase()}`;
// }

// function greet(name,callback){
//     const myName = "TIJANI";
//     console.log(`${callback(name)}, i\'m ${myName}`);  
// }

// greet('bobo',morning);
// greet('peter',morning)


/**
 * Reduce method
 */

/**
 * iterates, callback 
 * reduce to a single value - number, array,string
 * acc : total of all calculations
 * curr : current iteration/value
 */

const people = [

      {slug:"abdellatif",age:20,position:"hsm",id:1,salary:200},
      {slug:"youness",age:22,position:"developer",id:2,salary:600},
      {slug:"salim",age:40,position:"ceo",id:3,salary:800},
      {slug:"amina",age:20,position:"commercial",id:4,salary:650},     
];

let result = people.reduce((acc,curr) => {


    
      
      return acc + curr.salary;

},0) / people.length;

console.log(result);
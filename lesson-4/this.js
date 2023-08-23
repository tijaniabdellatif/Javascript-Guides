/**
 * This keyword
 * person.fullname();

        console.log(this);
 */


/**
 * Factory function & constructor function
 */

// const person = {

//     name:"john",
//     age:20,
//     married:true,
//     siblings : ['anne','peter'],
//     job:{

//         title:'developer',
//         company:{

//             name:'coding addict',
//             address:'123 main Street',
//         }
//     },

//     "ranadom-value":350,

//     fullname:function(){

//           console.log(`my name is ${this.name}`);
//     }
// } 



function Person(first,last){

      this.first = first;
      this.last = last;
      this.fullName = function(){

          console.log(`my name is ${this.first} ${this.last}`)
      }

      
     console.log(this)
} 

const dodo = new Person('abdellatif','tijani');
console.log(dodo.constructor);
dodo.fullName();


const bob = {};
console.log(bob.constructor);

// function createPerson(firstname,lastname){

//      return {

//           firstname:firstname,
//           lastname:lastname,
//           fullname:function(){

//              console.log(`my name is ${this.firstname} ${this.lastname}`);
//           }
//      }

// }

// const person = createPerson('abdellatif','tijani');
// person.fullname();
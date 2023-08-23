/**
 * Create object
 * 
 */

const person = {

    name:"john",
    age:20,
    married:true,
    siblings : ['anne','peter'],
    job:{

        title:'developer',
        company:{

            name:'coding addict',
            address:'123 main Street',
        }
    },

    "ranadom-value":350
} 


const {['ranadom-value']:value,name,age,married,siblings,job:{title,company:{name:company_name,address}}}=person;

console.log(value);



// console.log('furst',person);
// person.age = 60;
// person.city="chigago";
// // const siblings = delete person.siblings;
// // console.log(siblings)
// console.log(person)
// console.log(person.job.title);
// console.log(person['ranadom-value'])


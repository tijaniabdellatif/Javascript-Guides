/**
 * class ES6
 */

class Account{

     constructor(name,balance){

         
          this.name = name;
          this.balance = balance;

     }

     deposit(amount){

            this.balance += amount;
            console.log(`hello ${this.name}, your balance is ${this.balance}`)
     }
}

const person = new Account('tijani',650);
// console.log(person);
// person.deposit(500);

function callMe(city, country){

    console.log(this);
    console.log(`hello ${this.name}, your balance is ${this.balance}
    my city ${city} and my country ${country}
    `);
     
}
/**
 * The keyword call
 * list of item
//  */
// callMe.apply(person);

// /**
//  * Apply
//  * array of item
//  */

// callMe.apply(person,['san diego','us']);

/**
 * 
 * Bind : assign it to a variable and call it later
 */

const another = callMe.bind(person,'street 5','us')
another();

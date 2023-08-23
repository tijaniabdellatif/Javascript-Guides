/**
 * Prototypal inheritance model
 * Javascript uses prototypal inheritance model that means 
 * every constructor function/class has a prototype property
 * that is shared by every instance of the constructor, so any 
 * propreties and methods or prototype can be accessed by every instance 
 * 
 * prototype properties return an object
 */

function Account(name,initialBalance){

     this.name = name;
     this.balance = initialBalance;
}

const person = new Account('tijani',5550);
const person2 = new Account('abdellatif',6000);

Account.prototype.bank = 'CIH';
Account.prototype.deposit = function(amount){

    this.balance += amount;
    console.log(`hello ${this.name}, your balance is ${this.balance}`)
}


console.log(person);
console.log(person2);
person.deposit(400);
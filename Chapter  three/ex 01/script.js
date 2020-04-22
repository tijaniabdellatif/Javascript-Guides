// Wokrshop 1 :
// Create a function that takes an array with objects and returns the sum of people's Money
// don't Forget to use Array methods to do the exercice otherwise feel free to do it by the way you feel right, Data Structures is the main goal of the exercice
// hints
// getMoney([
//   { name: "amine", age: 21, budget: 15000 },
//   { name: "hamid",  age: 32, budget: 40000 },
//   { name: "soufiane",  age: 16, budget: 3500 }
// ]) ➞ return(Some of money)









let card =[
    {
    name: 'amine', 
    age : '21', 
    budget : '15000'
    },
    {
        name: 'hamid', 
        age : '32', 
        budget : '40000', 
        },
        {
            name: 'ragoubi', 
            age : '16', 
            budget : '3500', 
            },

]
 displayInfo : function()
 { 
        console.log(`${card.name} Some of money ${card.age} at ${card.budget}`)
    };

card.displayInfo();



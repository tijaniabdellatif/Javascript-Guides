// Wokrshop 1 :
// Create a function that takes an array with objects and returns the sum of people's Money
// don't Forget to use Array methods to do the exercice otherwise feel free to do it by the way you feel right, Data Structures is the main goal of the exercice
// hints
// getMoney([
//   { name: "amine", age: 21, budget: 15000 },
//   { name: "hamid",  age: 32, budget: 40000 },
//   { name: "soufiane",  age: 16, budget: 3500 }
// ]) ➞ return(Some of money)









let budget =[
    {
    name: 'amine', 
    budget : '15000',
    
    },
    {
        name: 'hamid', 
        budget : '40000',
        
    },
     {
          name: 'ragoubi', 
          budget : '3500', 
           
    },

];

let  totalbudget = budget.reduce((prevVal, elem) => prevVal + elem.budget, 0);
 

console.log(totalbudget); //totalbudget:553500



 //{ 
 //   card.reduce(`${card.budget} Some of money ${card.budget} at ${card.budget}`)
 // };





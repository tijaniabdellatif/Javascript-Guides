/*## Wokrshop 1 : 

* Create a function that takes an array with objects and returns the sum of people's Money

* don't Forget to use Array methods to do the exercice otherwise feel free to do it by the way you feel right, Data Structures is the main goal of the exercice

*hints*
```
getMoney([
  { name: "amine", age: 21, budget: 15000 },
  { name: "hamid",  age: 32, budget: 40000 },
  { name: "soufiane",  age: 16, budget: 3500 }
]) ➞ return(Some of money)
```*/

let getPrice={

    people:[
        { name: "amine",  age: 21,  budget: 15000 },
        { name: "hamid",  age: 32, budget: 40000 },
        { name: "soufiane",  age: 16, budget: 3500 }
        ],
    SomeOfMoney:function()
        {
        const fect=this.people.reduce((acc,curr)=>{
            if(curr.name)
                {
                    acc+=curr.budget;
                }
                    return acc;
                },0)

                return fect;

            }
        };
 console.log(getPrice.SomeOfMoney());


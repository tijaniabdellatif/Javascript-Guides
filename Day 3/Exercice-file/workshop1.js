
const getMoney = [{

 name:'amine',
 age: '21',
 budget: 15000,

},

 {

    name:'hamid',
    age: '32',
    budget: 40000,
   
   },

  {

    name:'soufiane',
    age: '16',
    budget: 3500,
   
   }];
   

   budg = [15000,40000,3500]
   
   const sum = budg.reduce( function (total, budget)
   {


    return total + budget 
    
   });
 console.log(sum);
      

 


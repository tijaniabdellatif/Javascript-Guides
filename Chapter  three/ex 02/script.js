// workshop 2 :
// Create a function that determines whether an order is eligible for free shipping.
// the condition is :
// if(total > 50)
// {
//   feel free to shop
// }
// hints
// free(
//   { "tomate": 5.99, "thon": 15.99 }
//   ) ➞ false
// free(
//   { "Monopoly": 11.99, "parshi": 35.99, "dadossa": 13.99 }
//   ) ➞ true
// try to use the loop for(const key in array)
 
function free(ara)
{
   
     var total=0;
      for(const i in ara)
      {
          total+=ara[i];
      }
      if(total>50)
      {
         console.log(`feel free to shop${total}`);
      }
      else
      {
       console.log(`not feel free to shop${total}`);
      }
   

}
free({tomate:5.99,thon:15.99,parshi: 35}) // feel free to shop 56.980000000000004
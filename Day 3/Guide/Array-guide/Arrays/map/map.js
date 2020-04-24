/*filter method*/ 
const prices = [10,20,15,35,25,40,5];

/* ==== Hints ===== */

/* 

==> map prend an array et ajoute le sur un autre nouveau array

-- iterate an array 
-- return updated value for each item 
-- push updated value to another new array

Non destructive method
*/



/*const sales = prices.map((price) =>{

  return price / 2;

});

console.log(sales);*/

const product = [{
    name: 'tomate',
    price: 20
  },
  {
    name: 'mushromm',
   price: 40
  },
  {
    name: 'banan',
   price: 10
  },
  {
    name: 'poisson',
   price: 50
  },
  {
    name: 'red hot chilli',
    price: 30
  }
];

const half = product.map((item)=>{

  if(item.price > 30){

    return {name : item.name,price:item.price /2} 

    /*product.price = product.price / 2
    return product  ==> destructive way*/
  }

  else{

    return item;
  }
});

console.log(half);






 
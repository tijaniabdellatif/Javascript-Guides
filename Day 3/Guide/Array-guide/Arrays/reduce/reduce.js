/*filter method*/ 
const scores = [10,20,15,35,25,40,5];

/* ==== Hints ===== */

/* 
reduce method iterate on an array and return not neccessarliy a array it 

can be a object and number or a string

return the number of scores > 20
*/

/*const users = [
    {name : 'tijani',premium : true},
     { name: 'abdellatif', premium: false },
      { name: 'spleux', premium: true },
       { name: 'lionbad', premium: false }
];

/* accumulating values*/ 
/*const highScore = scores.reduce((acc,curr)=>{

  if(curr>20)
  {
     acc++;
  }

  return acc;
},0)

console.log(highScore)*/


const product = [{
    name: 'tomate',
    price: 20
  },
  {
    name: 'mushromm',
    price: 40
  },
  {
    name: 'tomate',
    price: 10
  },
  {
    name: 'poisson',
    price: 50
  },
  {
    name: 'red hot chilli',
    price: 30
  },
  {
    name: 'tomate',
    price: 60
  }
];


const totalTomate = product.reduce((acc,curr)=>{
 
  if(curr.name ==='tomate'){

    acc += curr.price;
  }

  return acc;
},0)

console.log(totalTomate);
 
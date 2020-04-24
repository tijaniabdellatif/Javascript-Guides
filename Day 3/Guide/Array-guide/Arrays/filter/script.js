/*filter method*/ 
const scores = [10,20,15,35,25,40,5];

/* ==== Hints ===== */

/* 
==> filtrer certains elements d'un array en se basant 

sur une condition 

-- iterate an array 

-- perform a check on each item inside a callback function

-- the callback function is fired for each item in the array based on that condition

IF(filtter = true) = > keep the item inside the filtred array
else() => remove the item from the array 

Non Destructive method

filter-out all the scores that are high than 20

*/
/*const filtred = scores.filter((score)=>{ 
return score > 20;
}); 
console.log(scores);
console.log(filtred);*/

const users = [
    {name : 'tijani',premium : true},
     { name: 'abdellatif', premium: false },
      { name: 'spleux', premium: true },
       { name: 'lionbad', premium: false }
];


const premiumUser = users.filter( user =>{

  return user.premium ;

});

console.log(premiumUser);




 
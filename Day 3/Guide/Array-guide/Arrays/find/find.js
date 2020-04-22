/*filter method*/ 
const scores = [10,20,15,35,25,40,5];

/* ==== Hints ===== */

/* 
==> find method

retourne la valeur du premier element qui rempli les tests in callback function

*/
// it return true
const scoreFifth = scores.find((item)=>{

return item > 30;

})

console.log(scoreFifth);
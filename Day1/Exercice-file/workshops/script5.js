function score(){
let x = prompt('entrez le score 1');
let y = prompt('enter le score 2');
let z = prompt('entrer le secor 3');

const score = [x,y,z];

 
const output = score.reduce((a,b)=>{
return a+b;
},0);

// pour donner la moyenne
var moyenne = Math.floor(output /3);
console.log(`the name ${name} has an average of : ` + moyenne)

return moyenne
}

const karim = score (`karim`);
const salim = score (`salim`);
const amine = score (`amine`);

if(karim > salim && karim > amine){
    console.log(karim is the winner );
}
if(salim > karim && salim > amine ){
    console.log(salim is the winner);
}
if(amine > salim && amine > karim){
    console.log(amine is the winner);
}
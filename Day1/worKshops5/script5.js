function score (name){  

let x = Number(prompt('entrez le Score 1'));
let y = Number(prompt('entrez le Score 2'));
let z = Number(prompt('entrez le Score 3'));

const score = [ x,y,z]
// Average
const output = score.reduce( (a,b) =>{
 
 return a+b;
},0)

console.log('=== the average is ===');
 var moyenne = Math.floor(output / 3);

 console.log( `the name ${name} has an average of :`+ moyenne)
return moyenne ;


}

// javascript dynamique

const player1 = score('player1');
const player2 = score('player2');
const player3 = score('player3');

if (player1  > player2 && player1  > player3 ){
    console.log('player1 has a score of :'+ player1 +" and win the game");
}
 else if (player2  > player1 && player2  > player3 ){
    console.log('player2 has a score of :'+ player2 +" and win the game");
}

 else if (player3 > player1 && player3  > player2 ){
    console.log('player3 has a score of :'+ player3 +" and win the game");
}
else{
    console.log("egalite");
}


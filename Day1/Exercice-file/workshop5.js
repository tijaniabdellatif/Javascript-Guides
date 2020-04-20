
function score (name){

let karim = Number(prompt('enter le score 1'));
let amine = Number(prompt('enter le score 2'));
let salim = Number(prompt('enter le score 3'));

  const score = [karim,amine,salim];

//Average

let sum = 0;
if(name.length === 0){
      return sum;
    
}
for (let i = 0; i < name.length; i++){
  sum += name[i];
}
return sum / name.length;
}

let avgScoreKarim = score ('karim');
let avgScoreAmine = score ('amine');
let avgScoreSalim = score ('salim');
let winner;

 
if(avgScoreKarim > avgScoreAmine && avgScoreKarim > avgScoreSalim) {
    alert("Karim's average score was " + avgScoreKarim);
} else if (avgScoreAmine > avgScoreKarim && avgScoreAmine > avgScoreSalim) {
    alert("Amine's average score was " + avgScoreAmine);
} else if (avgScoreSalim > avgScoreKarim && avgScoreSalim > avgScoreAmine) {
    alert("Salim's average score was " + avgScoreSalim);
} else {
    alert("Bravo you won " + winner);
}
 

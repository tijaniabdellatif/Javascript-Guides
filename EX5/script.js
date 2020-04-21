// Wokrshop 5 :
// Karim and Amine plays together Basketball, in the last 3 games, Karim Scored 16 45 80 points, while amine scored 19 40 99 :
// Calculate the average(la moyenne) score of each one
// Decide which one win in average (the highest one), and print the winner with the score in the console
// Salim plays also with them and had scores of 20,88,120 so decide who is the winner between Karim Amine and Salim,using their highest average


function scoore(name)
{
    let scor1=parseInt(prompt('entrer score1'));
    let scor2=parseInt(prompt('entrer score2'));
    let scor3=parseInt(prompt('entrer score3'));
    let my=Math.floor((scor1+scor2+scor3)/3);

    console.log(`le score de ${name} est `+my);
    return my;
}

scoore('karim');
scoore('amin');
scoore('salime');

const scoreKarim=scoore('karim');
const scoreAmin=scoore('amin');
const scoreSalim=scoore('salime');


if(scoreKarim>scoreAmin && scoreAmin > scoreSalim)
{
    console.log('Amine has a score of :'+scoreAmin +" and win the game");
}
else if(scoreSalim>scoreKarim && scoreSalim>scoreAmin)
{
    console.log('salim has a score of'+scoreSalim+" and win the game")
}
else
console.log('scoore');
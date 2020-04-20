//work5

function Moyene(name)
{
    let sc1=parseInt(prompt('entrer score1'));
    let sc2=parseInt(prompt('entrer score2'));
    let sc3=parseInt(prompt('entrer score3'));
    let my=Math.floor((sc1+sc2+sc3)/3);

    console.log(`le score de ${name} est `+my);
    return my;
}

Moyene('karim');
Moyene('amin');
Moyene('salime');

const scoreK=Moyene('karim');
const scoreA=Moyene('amin');
const scoreS=Moyene('salime');


if(scoreK>scoreA && scoreA > scoreS)
{
    console.log('Amine has a score of :'+scoreS +" and win the game");
}
else if(scoreS>scoreK && scoreS>scoreA)
{
    console.log('salim has a score of'+scoreS+" and win the game")
}
else
console.log('egalite');

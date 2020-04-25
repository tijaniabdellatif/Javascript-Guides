//-----Day1 workchop 5 -------
//Karim and Amine plays together Basketball, in the last 3 games, Karim Scored 16 45 80 points, while amine scored 19 40 99 :
//Calculate the average(la moyenne) score of each one
//Decide which one win in average (the highest one), and print the winner with the score in the console
//Salim plays also with them and had scores of 20,88,120 so decide who is the winner between Karim Amine and Salim,using their highest average
/* function : va me creer les joueurs avec leur score*/
//-----------------------------------------

function average(name) {
	let x = parseInt(prompt('score1'));
	let y = parseInt(prompt('score2'));
	let z = parseInt(prompt('score3'));
	let aver = (x + y + z) / 3;

	console.log(`le score de ${name} est : ${aver}`);
	return aver;
}

//---- the winner between Karim and Amin.

let Karim = average('Karim');
let Amin = average('Amin');

if (Karim > Amin) {
	console.log(`Karim is the winner.`);
} else if (Karim < Amin) {
	console.log(`Amin is the winner.`);
} else {
	console.log(`Equalizer`);
}

//---- the winner between Karim Amine and Salim.

let Salime = average('Salime');

if (Karim > Amin && Karim > Salime) {
	console.log(`Karim is the winner.`);
} else if (Salime > Karim && Salime > Amin) {
	console.log(`Salime is the winner.`);
} else if (Amin > Karim && Amin > Salime) {
	console.log(`Amin is the winner.`);
} else {
	console.log('Equalizer');
}

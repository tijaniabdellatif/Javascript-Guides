//----- day-2 workchop-1 ------
// Create a function which calculate the result of an mathematical equation like this : ax²+bx+c=0
// Algorithm :
// Inputs and outputs :
// (a,b,c) as function parameter
// delta : the condition
// x1 , x2 : Result
// Functionnality :
// get delta = b*b - 4*a*c
// if(detla < 0) ==> no Solution
// else if(delta = 0) ==> x1 = -b/2*a
// else  => x1 = (-b - racine(delta))/2*a;
//          x2 = (-b + racine(delta))/2*a
// console to the Log the Result

function calculate(a, b, c) {
	a = Number(prompt(`number one :`));
	b = Number(prompt(`number two:`));
	c = Number(prompt(`number thre :`));
	let delta = b * b - 4 * a * c;
	if (delta < 0) {
		console.log(`no Solution`);
	} else if (delta == 0) {
		x1 = -b / (2 * a);
		console.log(`the Result : ${x1}`);
	} else {
		x1 = (-b - Math.sqrt(delta)) / 2 * a;
		x2 = (-b + Math.sqrt(delta)) / 2 * a;
		console.log(`the Result : (${x1} , ${x2})`);
	}
	return calculate;
}
calculate();

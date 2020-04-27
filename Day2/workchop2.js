// ------ day-2 workchop-2 ---------

// 1- Create a function : Triangle(ab,ac,cb,h)
// ab , ac , cb=base are the ribs of the triangle
// and h is the height, this function return an array
// contain [ab,ac,cd,h]

// 2- Inside the function  Triangle decide which type of triangle we got :
//   if(ab = ac) {triangle isocel}
//   else if(ab=ac=cb) {triangle equi}
//   else {normal triangle}

// 3- Create a function calculArea which take as parameter the return value of Triangle function, and returns the Area

// 4- Create a function Calcul Perimeter which take as parameter the return value of Triangle function, and returns the Area

// Try to do the Exercice with callBack function

// -----------------

function Triangle(ab, ac, cd, h) {
	ab = Number(prompt(`Length of the rib ab :`));
	ac = Number(prompt(`Length of the rib ac :`));
	cd = Number(prompt(`Length of the rib cd :`));
	h = Number(prompt(`the height : `));
	let ribs = [ ab, ac, cd, h ];
	if (ab == ac && ab !== cd) {
		console.log(`The type : triangle isocel`);
	} else if (ab == ac && ab == cd) {
		console.log(`The type : triangle equi`);
	} else {
		console.log(`The type : normal triangle`);
	}
	return ribs;
}

let rib = Triangle();

function calculArea() {
	Area = rib[2] * rib[3] / 2;
	console.log(`The Area is : ${Area} cm `);
	return Area;
}
calculArea();

function CalculPerimeter() {
	Perimeter = rib[0] + rib[1] + rib[2];
	console.log(`The perimeter is : ${Perimeter} cm `);
	return Perimeter;
}
CalculPerimeter();

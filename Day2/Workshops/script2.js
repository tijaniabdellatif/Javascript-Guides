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

// 5- Bonus : 

// Try to do the Exercice with callBack function : 

const triangle = (ab, ac, cb, h) => {
    ab = Number (prompt('entrer the value of ab'));
    ac = Number( prompt ('enter the value of ac'));
    cb = Number(prompt ('enter the value of cb'));
    h = Number(prompt ('enter the value of h'));

    let arr = [ab, ac, cb, h];
    

    if (ab==ac && ac != cb){
        console.log(triangle isocel);

}
else if (ab==ac==cb){
    console.log(triangle equi);
}
else{
    console.log(normale triangle);
}
return arr;

}
let tab = Triangle ;
function calcArea(div){
div = (tab[2]*tab[3])/2;
console.log(`surface est : ${div}`);
return div
}
calcArea();

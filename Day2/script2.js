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
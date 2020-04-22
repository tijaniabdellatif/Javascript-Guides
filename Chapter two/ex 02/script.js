// Workshop 2 :
// A triangle is a geometric shape defined by these 2 elements :
// the base and the the height.
// we got a multiple type of Triangles :
// the Goal of this workshop is to create a triangle and manipulate it as well with the following steps:
// use prompt() to get values and console() to input values
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

   //not easy//
   function Traingle(ab,ac,cb,h)
{
    ab=Number(prompt('entrer la valeur de ab'));
    ac=Number(prompt('entrer la valeur de ac'));
    cb=Number(prompt('entrer la valeur de la base'));
    h=Number(prompt('entrer la valeur de hauteur de triangle'));
    let arraa=[ab,ac,cb,h];
    if(ab == ac && ac!==cb )
    {
        console.log(`triangle isocel`);
    }
    else if(ab==ac && ac==cb)
    {
        console.log(`triangle equi`);
    }
    else
    {
        console.log(`normal triangle`);
    }
     return arraa;


}
var ton=Traingle();
function calcu(tag)
{
   tag=(ton[2]*ton[3])/2;
   console.log(`la surface de traingle est : ${tag}`);
   return tag;

}
calcu();

function tere(pu)
{
   pu=ton[0]+ton[1]+ton[2];
   console.log(`le Périmètre du triangle est : ${pu}`);
   return pu;
}
tere();


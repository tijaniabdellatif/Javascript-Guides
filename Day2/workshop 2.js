
function traingle(ab,ac,cb,h)
{
    ab=Number(prompt('entrer la valeur de ab'));
    ac=Number(prompt('entrer la valeur de ac'));
    cb=Number(prompt('entrer la valeur de la base'));
    h=Number(prompt('entrer la valeur de hauteur de triangle'));
    const arr=[ab,ac,cb,h];
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
     return arr;
   

}
let rtn=traingle();
function calculArea(sur)
{
   sur=(rtn[2]*rtn[3])/2;
   console.log(`la surface de traingle est : ${sur}`);
   return sur;
    
}
calculArea();

function perimeter(p)
{
   p=rtn[0]+rtn[1]+rtn[2];
   console.log(`le Périmètre du triangle est : ${p}`);
   return p;
}
perimeter();

function triangle(ab,ac,cb,h) {
   
        ab=Number(prompt('entrer la valeur de ab'));
        ac=Number(prompt('entrer la valeur de ac'));
        cb=Number(prompt('entrer la valeur de la base'));
        h=Number(prompt ('entrer la valeur de hauteur de triangle'));

      const trg = [ ab,ac,cb,h]
    
    if(ab == ac && ac!=cb) 
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
 return trg ;
}

triangle(); 

const srf = triangle(); 
function calculArea(area){
    area = (srf [2]*srf[3])/2;
    console.log(`Area the triangle is ${area}`);
    return area;
}

calculArea();
  
function Preimeter(prmt){
    prmt = srf[0]+srf[1]+srf[2];

    console.log(`Preimeter the triangle is ${prmt}`);

    return prmt;
}

Preimeter();










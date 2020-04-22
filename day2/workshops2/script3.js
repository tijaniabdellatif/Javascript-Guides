
function triangle(ab,ac,cb,h) {
   
        ab=Number(prompt('entrer la valeur de ab'));
        ac=Number(prompt('entrer la valeur de ac'));
        cb=Number(prompt('entrer la valeur de la base'));
        h=Number(prompt ('entrer la valeur de hauteur de triangle'));

      const trg = [ ab,ac,cb,h]
    
    if(ab == ac) 
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
triangle ();









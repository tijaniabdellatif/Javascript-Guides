function equ(a,b,c)
{
    a=Number(prompt('entrer la valeur de a'));
    b=Number(prompt('entrer la valeur b'));
    c=Number(prompt('entrer la valeur c'));
    let delta=b*b-4*a*c;
    let x1;
    let x2;
    if(delta<0)
    {
        console.log(`no soltion`);
    }  
    else if(delta==0)
    {
        x1= -b/(2*a);
        console.log(`la solution de l'equation est : ${x1}`);
    }
    else 
    {
        x1=(-b - Math.sqrt(delta))/2*a;
        x2=(-b + Math.sqrt(delta))/2*a;
        console.log(`la solution de l'equation est : ${x1} et ${x2}`);
    }
}
equ();
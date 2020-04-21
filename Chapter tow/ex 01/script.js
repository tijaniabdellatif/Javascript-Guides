// Workshop 1 :
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



function total(a,b,c)
{
    a=Number(prompt('entrer la valeur de a'));
    b=Number(prompt('entrer la valeur b'));
    c=Number(prompt('entrer la valeur c'));
    let delta=b*b-4*a*c;
    let E1;
    let Z2;
    if(delta<0)
    {
        console.log(`no soltion`);
    }  
    else if(delta==0)
    {
           E1 = (-b)/(2*a);
    //             E1= -b/(2*a);
        console.log(`la solution de l'equation est : ${E1}`);
    }
    else 
    {
        E1=(-b - Math.sqrt(delta))/2*a;
        Z2=(-b + Math.sqrt(delta))/2*a;
        console.log(`la solution de l'equation est : ${E1} et ${Z2}`);
    }
}
 total(); 

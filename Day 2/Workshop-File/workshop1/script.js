/*## Workshop 1 : 
* Create a function which calculate the result of an mathematical equation like this : `ax²+bx+c=0`

* Algorithm :
```
Inputs and outputs :

(a,b,c) as function parameter

delta : the condition 

x1 , x2 : Result

```
```
Functionnality :
get delta = b*b - 4*a*c

if(detla < 0) ==> no Solution
else if(delta = 0) ==> x1 = -b/2*a
else  => x1 = (-b - racine(delta))/2*a;
         x2 = (-b + racine(delta))/2*a
```
* console to the Log the Result*/

function equ(a,b,c){

    a=Number(prompt('enter la valeur de a '));
    b=Number(prompt('enter la valeur de b '));
    c=Number(prompt('enter la valeur de c '));
    let delta=b**2-4*a*c;
    let x1;
    let x2;
    if(delta<0){
        console.log('no solution');
    }
    else if (delta==0){
        x1=-b/(2*a);
        console.log(`la solution de l'equation est : ${x1}`);

    }
    else{

        x1=(b-Math.sqrt(delta))/2*a;
        x2=(b+Math.sqrt(delta))/2*a;
        console.log(`la solution de l'equation est : ${x1} et ${x2}`);

    }
}
equ();
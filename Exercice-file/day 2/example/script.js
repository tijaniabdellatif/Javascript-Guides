//worlshop 1
const equation = (a,b,c) => {
    a = Number(prompt('enter first value'));
    b = Number(prompt('enter second value'));
    c = Number(prompt('enter third value'));


    delta = (b*b) - (4*a*c); 
    

    if(delta > 0)
    {
        x1 = ((-b) - Math.sqrt(delta))/(2*a);
        x2 = ((-b) + Math.sqrt(delta))/(2*a); 
        alert(`two solution is ${x1} and ${x2}`);
    }

    else if(delta == 0)
    {
        x = (-b)/(2*a); 
       alert(`one solution is ${x}`);
    }

    else
    {
        alert('no solution');
    }


}

equation();






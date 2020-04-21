function equation (a,b,c) {
    const value1 = prompt('enter first value');
          value2 = prompt('enter second value');
          value3 = prompt('enter third value');

          a = Number(value1);
          b = Number(value2);
          c = Number(value3);

    delta = (b*b) - (4*a*c); 
    

    if(delta > 0)
    {
        x1 = ((-b) - Math.sqrt(delta))/(2*a);
        x2 = ((-b) + Math.sqrt(delta))/(2*a); 
        alert(`tow solution is ${x1} and ${x2}`);
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
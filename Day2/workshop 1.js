function myEquation (a,b,c) {

    a = Number (prompt("enter the value of a"));
    b = Number (prompt("enter the value of b"));
    c = Number (prompt("enter the value of c"));

    delta = (b*b) - (4*a*c);
     let x1;
     let x2;

     if (delta<0)
     {
        alert(`no Solution`);

     }
     else if (delta==0)
     {

        x1 = -b/2*a;

        alert(`solution is : ${x1}`);
     }
     else {

        x1 = (-b - racine(delta))/2*a;
        x2 = (-b + racine(delta))/2*a;

        alert(`solution is : ${x1} and ${X2}`);

     }
}

myEquation();
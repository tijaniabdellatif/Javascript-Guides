//work3
var x=prompt("entrer numb1");
var y=prompt("entrer numb2");
var Num1=parseFloat(x);
var Num2=parseFloat(y);
// alert(Num1+Num2);

var choix=prompt("entrer votre choix sum ou multp ou soustr ou div")

if(choix=="sum")
{
    alert(Num1+Num2);
}
else if(choix=="multp")
{
    alert(Num1*Num2);
}
else if(choix=="soustr")
{
    alert(Num1-Num2);
}
else
{
   
alert(Num1/Num2);
}


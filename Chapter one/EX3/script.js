// Wokrshop 3 :
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// Prompts the user for first number.
// Stores that first number
// Prompts the user for the second number.
// stores that number and responds with the SUM by using an alert.
// Make a program that can subtract, multiply, and also divide!(-, * , /).

let firstNumber = prompt('enter your frist Number!');
let secondNumber = prompt('enter your second Number!');

x = Number(firstNumber);
y = Number(secondNumber);
// alert(x+y);
let calc = prompt('for + SUM, for - SUB,for * MUL, for / div');
if(calc == 'SUM')
    alert(x+y);
else if(calc=="MUL")
{
    alert(x*y);
}
else if(calc=="SUB")
{
    alert(x-y);
}
else if(calc=="div")
{

alert(x/y);
}

//workshop3
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// Prompts the user for first number.
// Stores that first number
// Prompts the user for the second number.
// stores that number and responds with the SUM by using an alert.
// Make a program that can subtract, multiply, and also divide!(-, * , /).

let firstNumber = prompt('Enter your first number!');
let secondNumber = prompt('Enter you second number!');
let x,y;
x = Number(firstNumber);
y = Number(secondNumber);
let calc = prompt('for + SUM, for - SUB, for * MUL, for / DIV ');

if(calc == '+'){
    alert(x + y);
} else if (calc == '-') {
    alert(x - y);
} else if (calc == '*') {
    alert(x * y);
} else if (calc == '/'){
    alert(x / y);
} else {
    alert('wrong answer');
}


var a = prompt("Enter number");
var b = prompt("Enter second number");
var s = prompt("Enter operation must be +, -, /, or *");

switch(s){
  case '+':
    alert(Number(a) + Number(b));
    break;
  case '-':
    alert(Number(a) - Number(b));
    break;    
  case '/':
    alert(Number(a) / Number(b));
    break;   
  case '*':
    alert(Number(a) * Number(b));
    break;
default:
  alert("Enter real operation and try again.")     
} 

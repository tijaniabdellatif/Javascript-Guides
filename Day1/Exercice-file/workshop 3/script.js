/*## Wokrshop 3 :
```
*  Make a Calculator! using prompt(), and variables, make a program that does the following:
 1. Prompts the user for first number.
 2. Stores that first number
 3. Prompts the user for the second number.
 4. stores that number and responds with the SUM by using an alert.  
 5. Make a program that can subtract, multiply, and also divide!(-, * , /).*/

 var a = prompt("Enter number");
 var b = prompt("Enter second number");
 var calc = prompt("Enter operation must be +, -, /, or *");
 
 switch(calc){
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
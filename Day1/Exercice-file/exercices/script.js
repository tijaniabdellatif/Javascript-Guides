// ## Workshop 2 :
// 1
// var firstName="karim";
// var lastName="nouaouri";
// var fulName=firstName+" "+lastName;
// console.log("my full name is :"+" "+fulName);//resultat est : my full name is abdelkarim nouaouri
// // 2
// var a = 34;
// var b = 21;
// a = 2; 
// console.log(a+b);//variable est redéclaré avec une nouvelle valeur qui 2 alors a+b est 23(21+2)
// var c; 
// console.log(c);///undefined
var firstNumber = parseFloat(prompt("Enter the first number", ""));
var secondNumber = parseFloat(prompt("Enter the second number", ""));
var firstAnswer=firstNumber;
var secondAnswer=secondNumber;
var sum=firstAnswer+secondAnswer;
var mul = firstAnswer * secondAnswer;
var div = firstAnswer / secondAnswer;
var sub = firstAnswer - secondAnswer;
alert(firstAnswer + "+" + secondAnswer + "=" + sum);
alert(firstAnswer +"-" +secondAnswer+ "="+ sub);
alert(firstAnswer + "*" + secondAnswer + "=" + mul);
alert(firstAnswer + "/" + secondAnswer + "=" + div);



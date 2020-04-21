// ## Workshop 2 :
1
var firstName="karim";
var lastName="nouaouri";
var fulName=firstName+" "+lastName;
console.log("my full name is :"+" "+fulName);//resultat est : my full name is abdelkarim nouaouri
// 2
var a = 34;
var b = 21;
a = 2; 
console.log(a+b);//variable est redéclaré avec une nouvelle valeur qui 2 alors a+b est 23(21+2)
var c; 
console.log(c);///undefined
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


// // workshop 4

var age = parseFloat(prompt("Enter your age please", ""));

var userAge=age;

if (userAge<=18){
    alert("Sorry, i can let you drive me")
}
else{
    alert("ok, i can let you drive me")
}

//last workshop
  
var karimGame1=16;
var karimGame2=45;
var karimGame3=80;
var amineGame1=19;
var amineGame2=40;
var amineGame3=99;
var salimGame1=20;
var salimGame2=88;
var salimGame3=120;
var karimAverage=(karimGame1+karimGame2+karimGame3)/3;
var amineAverage=(amineGame1+amineGame2+amineGame3)/3;
var salimAverage=(salimGame1+salimGame2+salimGame3)/3;
console.log(karimAverage);
console.log(amineAverage);
console.log(salimAverage);
if (karimAverage>amineAverage){
var winner="karim win with : "+karimAverage;
console.log( winner)
    if (winner > salimAverage) {

        console.log(winner)
    } else {
        console.log("salim is the winner with  : " + salimAverage)
    } 
}else{
    const winner="amine win with : "+amineAverage;
    console.log(winner)
    if (winner > salimAverage) {

        console.log(winner)
    } else {
        console.log("salim is the winner with  : " + salimAverage)
    } 
}










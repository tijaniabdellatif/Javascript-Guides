*******************************************************Workshop1:**********************************************************************
Question1
console.log(5 + "34"); // output "534",If we add number on string the result is string,
console.log(5 - "4"); // output 1,it's a normal Subtraction even if it was a string 
console.log(10 % 5); // output 0,Modulo in the traditional way
console.log(5 % 10); // output 5,Modulo in the traditional way
console.log("Java" + "Script"); // output "JavaScript",If u add string on string the result is string as well
console.log(" " + " "); // output "  ",empty string + empty string = empty string as well
console.log(5 % 10); // output " 0",If u add empty string on number the result is number beside emptiness 
console.log(true + true); // output 2,true equel 1 logic so 1 + 1 = 2
console.log(true + false); // output 1,false equel 0 logic so 1 + 0 = 1
console.log(false + true); // output 1,false equel 0 logic so 0 + 1 = 1
console.log(false - true ); // output -1,false equel 0 logic and true equel 1 logic so 0 - 1 = -1
console.log( 3 - 4); // output -1,Subtraction in the traditional way
console.log("Bob" - "bill"); // output NaN,Nan means Not-a-Number so u can't subtracting a string from another
Question2:
console.log(5 >= 1); // output true,
console.log(0 === 1); // output false,
console.log(4 <= 1); // output false,
console.log(1 != 1 ); // output false,
console.log("A" > "B"); // output false,
console.log("B" < "C"); // output true,
console.log("a" > "A"); // output true,
console.log("b" < "A"); // output false,
console.log(true === false); // output false,
console.log(true != true); // output false,
Question3:
console.log("hello! It's" +  " rainy " + " "  + "out"); // output "hello! It's rainy  out"
*******************************************************Workshop2:**********************************************************************
Question1:
var firstName="Cheymae";
var lastName="Raoudi"
Question2:
console.log(firstName + " " + lastName);// output "Zineb Belassiri"
Question3:
var a=34;
var b=21;
console.log(a + b);//output 55

var b=21;
var a=2;
console.log(a + b);//output 23

Question4:
var c;
console.log(c);// output undefined
********************************************************Workshop3:**********************************************************************
var a = prompt("Enter number");
var b = prompt("Enter second number");
var s = prompt("Enter operation must be +, -, /, or *");

switch (s) {
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
        alert("Operation error. Try again.")
}
**********************************************************Workshop4:********************************************************************
var age = prompt("entrer votre age");

switch (age) {
    case 0:
        age < 18;
        alert("Sorry, i can't let you drive me");
        break; //

    case 1:
        age >= 18 && age <= 40;
        alert(" i can let you drive me");
        break;

    default:
        alert("Sorry, i can't let you drive me");
}
**********************************************************workshop5:********************************************************************
function arrayAverage(arr) {

    var sum = 0;
    for (var i in arr) {
        sum += arr[i];
    }

    var arrayL = arr.length;

    return (sum / arrayL);
}
var arr1 = new Array(16, 45, 80);
var arr2 = new Array(19, 40, 99);
var arr3 = new Array(20, 88, 120);

var avg1 = arrayAverage(arr1);
console.log(avg1);

var avg2 = arrayAverage(arr2);
console.log(avg2);

var avg3 = arrayAverage(arr3);
console.log(avg3);

/**/
if (avg1 > avg2 && avg2 > avg3) { //Et
    alert('average avg1 is the bigger one');
} else
if (avg2 > avg1 && avg1 > avg3) {
    alert('average avg2 is the bigger one');

} else {
    alert('average avg3 is the bigger one');
  
  




// Workshop1 

//3. Making a string by using the + sign
const string ="hello! It's" + " rainy" + " out";
console.log(string);

//Workshop2

//1. My name using variables
let firstName,lastName,fullName;

firstName = 'Abdelhakim';
lastName = 'Nassifi';
//2. var fullName
fullName = firstName + ' ' + lastName;

console.log(fullName);

//3. Evaluate addition
var a = 34;
var b = 21;
a = 2; 
console.log(a + b);
// here the number is 23 because we changed the value of a

//4. what is c equal to?

var c;
console.log(c); // It's undefined because c has no value not defined yet

//workshop3 


let firstNumber = prompt('enter first number'); //prompt for the variables
let secondNumber = prompt('enter second number');


let x = parseInt(firstNumber); //change them to an integer
let y = parseInt(secondNumber);


let calc = prompt('For + enter SUM ,' + 'for - enter SUB ,' + 'for * enter MUL ,' + 'for / enter DIV '); //To Choose the operation


if(calc == 'SUM'){ // Calculator depending on the answer of calc   
    console.log(x + y);
} else if (calc == 'SUB') {
    console.log(x - y);
} else if (calc == 'MUL') {
    console.log(x * y);
} else if (calc == 'DIV'){
    console.log(x / y);
}

//Workshop4 


let userName = prompt("What's your name ?");
let userAge = prompt("What's your age ?");

if(userAge < 18){
    alert(userName + " Sorry, i can't let you drive me");
} else if (userAge == 18) {
    alert(userName + " Maybe, i can let you drive me");
} else {
    alert(userName + " Welcome, i can let you drive me");
}

// switch case statement

switch(userAge) {
    case userAge < 18 :
        alert(userName + " Sorry, i can't let you drive me");
        break;

    case userAge == 18 :
        alert(userName + " Maybe, i can let you drive me");
        break;

    case userAge > 18 :
        alert(userName + " Welcome, i can let you drive me");
        break;
    
    default :
        console.log("I'm taking a nap!");
}

//workshop 5

var teamKarim = (16 + 45 + 80) / 3;
var teamAmine = (19 + 40 + 99) / 3;
var teamSalim = (20 + 88 + 120) / 3;
console.log(teamKarim, teamAmine, teamSalim);

//teamKarim = teamAmine = teamSalim = (90, 90, 90) / 3;

if (teamKarim > teamAmine && teamKarim > teamSalim){
    console.log('KarimTeam wins in average! '+ teamKarim + ' points');
} else if (teamAmine > teamKarim && teamAmine > teamSalim) {
    console.log('AmineTeam wins in average! '+ teamAmine + ' points');
} else if (teamSalim > teamAmine && teamSalim > teamKarim){
    console.log('SalimTeam wins in average! ' + teamSalim + ' points');
} else {
    console.log('There is a draw');
}
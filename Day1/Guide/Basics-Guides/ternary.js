// /* Ternary operator */


// const name = 'tijani';
// const age = prompt("Your Age please");
// age >= 18 ? console.log(name+" you re major") : console.log(name+ " you re not Major"); /* Ternary Operator got three items */

// /*  */
// const major = age >= 18 ? 'yes' : 'no';
// console.log(major)

// /* this above is the same as bellow */
// // if(age >= 18){
// //    let major = 'yes';
   
// // } else {
// //     let major = 'no'
// // }


// /* Switch statement if we have a lot of conditions  */
// const job = 'Driver';
// const firstname = 'tijani';
// switch(job){
  
//     case  'Trainer':
//     console.log(firstname + ' teach how to code');
//            break;
//     case 'Driver' :
//         console.log(firstname + ' drives a taxi in rabat');
//          break;

//         case 'coder':
        
//         console.log(firstname + ' Code beautifull app');
//         break;
// default: 
// console.log(firstname + ' does something else');

// }

// function getMonthString(num) {

//     var month;    //Create a local variable to hold the string
//     switch (num) {
//         case 0:
//             month = "January";
//             break;
//         case 1:
//             month = "February";
//             break;
//         case 2:
//             month = "March";
//             break;
//         case 3:
//             month = "April";
//             break;
//         case 4:
//             month = "May";
//             break;
//         case 5:
//             month = "June";
//             break;
//         case 6:
//             month = "July";
//             break;
//         case 7:
//             month = "August";
//             break;
//         case 8:
//             month = "September";
//             break;
//         case 9:
//             month = "October";
//             break;
//         case 10:
//             month = "November";
//             break;
//         case 11:
//             month = "December";
//             break;
//         default:
//             month = "Invalid month";
//     }
//     return month;
// }
// const theDate = new Date();
// console.log("The month is ", getMonthString(theDate.getMonth()));



/* TESTING

Transform that to switch case 


*/

var Name = prompt('entre name');
var age = prompt('enter age ');

if(age < 13){

   confirm(Name + ' is just a boy');
}
else if (age >= 20 && age <30){

    alert(Name + 'is a teenager');
}
else{

    console.log(Name + 'is a man');
}

/* 
swicth(true){


    case : age < 13
}


*/

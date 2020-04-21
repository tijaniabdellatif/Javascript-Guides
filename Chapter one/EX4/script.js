// Wokrshop 4 :
// Make a smart car! This car will only let you drive if you are over 18. Make it do the following:
// using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with: Sorry, i can let you drive me
// IF they say they are 18, respond with: Yes , i can let you drive me but carefully
// IF they say they are over 18, respond with: yes , i can let you drive me
// Do the same using : switch case statement



const age = prompt('enter ton age :'),
    x = Number(age);
    
    
if(x<18){
    alert('Sorry, i can let you drive me');

}else if(x==18){
    alert('Yes , i can let you drive me but carefully');
}else{
    alert('yes , you can let you drive me');
}

// const age = prompt('enter ton age :'),
//     x = Number(age);
//     switch(x){
//         case x>18 :
//             alert('Sorry, i can let you drive me')
//             break;
//         case x==18 :
//             alert('Yes , i can let you drive me butcarefully')
//             break;
//         case x<18 :
//             alert('yes , you can let you drive me')
//             break;
//             default:
//             alert(  'Sorry, i can`t let you drive me')
//     };



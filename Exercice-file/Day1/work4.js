//work4

let age=parseInt(prompt("entrer votre age"));
if(age<18)
{
    alert("Sorry, i can't let you drive me");
}
else if(age==18)
{
    alert(" i can let you drive me carefully");
}
else
{
    alert("yes, i can let you drive me");
}

switch(age)
{
    case age<18 :
    
     alert(`Sorry, i can't let you drive me`);
     break;

     case age=18:
     
     alert(`yes you can drive mebut carefully`);
     break;

     default:

    alert(`i can let you drive me`);


}






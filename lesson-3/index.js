let firstName = "abdellatif";

firstName = "tijani";

function calculate(){

     console.log(firstName);
     firstName = 'peter';

     function redefine(){

           firstName = "john";
           console.log(`this is from redefine function ${firstName}`);
     }

     redefine();
}

calculate();
if(true){

    console.log(firstName);
    firstName = 'flin'

}

console.log(`the last returned name is ${firstName}`);
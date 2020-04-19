//string 

newFunction();

function newFunction() {
    let email = "Tijani@tijani.com";
    let chaine = "Hello world";
    console.log(email);
    //concatenation 
    let concat = email + ' ' + chaine;
    console.log(concat);
    //getting character
    console.log(concat[3]);
    console.log(chaine[4]);
    //length
    console.log(concat.length);
    //some methods 
    console.log(concat.toUpperCase());
    console.log(concat.toLowerCase());
    chaine = "my email";
    console.log(concat, chaine);
    //index
    let index = email.indexOf('a');
    console.log(index);
}

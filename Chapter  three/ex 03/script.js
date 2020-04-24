// workshop 3 :
// with a given Object containing the name and age as proprety
// Make a function that return the teenager person Among them.
// hints
// people({
//   amine: 71,
//   hamid: 45,
//   salim: 15,
//   karim: 29
// }) ➞ "salim"
// May be using this :
// Object.hasOwnProprety(key) : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty
// Object.keys() => Array of keys : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/keys


const mineur = {
       amine: 71,
       hamid: 45,
       salim: 15,
       karim: 29,
       simo : 11,
   };
   
  // console.log(Object.keys(mineur));


function teen(){

    for(let name in mineur){
    
 mineur.property1 <18;

if (mineur.hasOwnProperty(name)){

    if(mineur[name]<18){ 
console.log(`Rak mazal 9asserre ${name} `);  //Rak mazal 9asserre salim 
                                            // Rak mazal 9asserre simo 

}
}
}
}
teen();
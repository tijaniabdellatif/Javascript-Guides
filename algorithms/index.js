/**
 * #4Nettoyage de chaînes au debut et à la fin
 */


const removeChar = (str) => {

     return str.slice(1,-1)
}

console.log(removeChar('hello tijani abdellatif'))


/**
 * Challenge trouver les moutons calculer le nombre selon true
 * il faut traiter les null
 */
let sheeps = [

    true, true, true, false,
    true, true, true, true ,
    true, false, true, false,
    true, false, false, true ,
    true, true, true, true ,
    false, false, true, true,null
]


function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((a,n)=>{
    
        let total = a+(n===true ? 1 : 0);
         return total ;
    },0)
 }

 console.log(countSheeps(sheeps))



 /**
  *Doubler les lettres 
A partir d'une chaîne de caractères, renvoyez une chaîne dans laquelle chaque caractère (sensible à la
casse) est répété une fois.
doubleChar("String")  "SSttrriinngg"
doubleChar("Hello World")  "HHeelllloo WWoorrlldd"
doubleChar("1234!_ ")  "11223344!!__ "
  */

const doubleChar = (str) => {

     /**
      * OR using split method
      */
     let split = [...str];
     return split.map((item) => {
        return item + item;
     }).join('');
}

console.log(doubleChar('tijani abdellatif'));


/**
 * Supprimer les doublons
A partir d’une liste de nombres, supprimez les doublons et renvoyez la liste simplifiée sous forme ordonnée.
removeDuplicates([1,1,2,4,5,2,1,2,3,5,5,5])
 Array [ 1, 2, 3, 4, 5 ]
 */

const removeDuplicates = (lists) => {

     let values = lists.reduce((acc,curr) => {


        if(acc.includes(curr)){

            
             return acc;
        }

        else {

             return acc.concat(curr);
        }

        //   return acc.includes(curr) ? acc:acc.concat(curr)
     },[])

     console.log(values)
}

const removeDuplicates2 = (lists) => { 


      let out = [];

      for(i of lists) {

          if(!out.includes(i)){
              out.push(i);
          }
      }

      

      return out.sort((a,b) => a-b)

}


/**
 * Pourboire 
Écrivez une fonction qui calcule combien vous devez donner de pourboire en fonction du montant total de
la facture et du service. Vous devez tenir compte des notes suivantes:
• Terrible: 0%
• Poor: 5%
• Good: 10%
• Great: 15%
• Excellent: 20%
L’avis sur le service doit être insensible à la casse. Si un avis non reconnu est entré , vous devez renvoyer
"Rating not recognised".
Parce que vous êtes une personne sympathique, vous arrondissez toujours à la valeur supérieure, quel
que soit le service.
calculateTip(20, "ExcellEnt")  4 // Excellent service, vous donnez 20% de 20 = 4
calculateTip(26.95, "goOd")  3 // Bon service, 10% de 26.95 arrondi à 3
calculateTip(20, "hi")  "Rating not recognised"
 */


const Tips = {

     terrible:0.0,
     poor:0.05,
     good:0.1,
     great:0.15,
     excellent:0.2
}


const calculateTip = (amount,rating) => {

     rating = rating.toLowerCase();

     return rating in Tips ? Math.ceil(Tips[rating] * amount) : 'Rating not recog'
}

function calculateTip2(amount, rating) {
    console.log(amount,rating)
    var base = { terrible: 0, poor: 5, good: 10, great: 15, excellent: 20 }
    var total = Math.ceil(base[rating.toLowerCase()]*amount/100)
    return isNaN(total) ? 'Rating not recognised' : total
}


const calculateTip3 = (amount,satisfaction) => {


    let rating = satisfaction.toLowerCase();

        switch(rating){

             case 'terrible': console.log('Beuuuh noting'); return 0;
             case 'poor': return Math.ceil(amount * 0.05);
        }

}

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
 }

 /**
  *  Nombres les plus grands et plus petits d’une liste (7 kyu)
Vous recevez une chaîne de nombres séparés par des espaces et vous devez renvoyer le nombre le plus
grand et le plus petit.
highAndLow("1 2 3 4 5")  "5 1"
highAndLow("1 2 -3 4 5")  "5 -3"
highAndLow("1 9 3 4 -5")  "9 -5"
  */

function highAndLow(numbers){
     numbers = numbers.split(' ');
     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
    }
    

    console.log("high and low",highAndLow("1 9 3 10 5"));

    

    function highAndLow2(numbers){
     /**
      * split the string and map as number to return an array of numbers
      */
     numbers = numbers.split(' ').map(Number);

     return Math.max(...numbers) + ' ' + Math.min(...numbers); 
    }

    console.log("high and low",highAndLow2("1 9 3 10 5"));


   
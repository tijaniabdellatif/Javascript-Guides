/**
 *   javascript est un langage qui neccesite pas une 
 * declaration de type de donnée, le type est décidé à travers 
 * l'affectation
 */

alert('welcome please enter your name');

const firstname = prompt('sv^p saisir votre nom');

if(firstname === "boly"){

      let confirmation = confirm('please confirm your identity');

      if(confirm === true){

          alert('welcome : ',firstname);
      }

      else {

          alert('error ')
      }
}

else {

    alert('tu nes pas boly fuck off')
}
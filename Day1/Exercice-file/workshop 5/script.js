//workshop 4


function score(name){

    let x = Number(prompt('enter le Score 1'));
    let y = Number(prompt('enter le Score 2'));
    let z = Number(prompt('enter le Score 3'));
    
    const score = [x,y,z];
 
 //Average
 
   const output = score.reduce((a,b) =>{
       return a+b;
 
   },0)
 
   console.log('==== the average is ====');
   var moyenne = Math.floor(output / 3);
   console.log('the name ${name} has an average of : +moyenne');
   return moyenne;
 }

 const player1 = score('karim');
 const player2 = score('salim');
 const player3 = score('amine');
 
 if (karim > salim && karim  > amine){
     console.log('karim is winner');
 }
  else if (salim  > karim && salim > amine ){
     console.log('salim is winner ');
 }
 
  else if (amine > karim && amine  > salim ){
     console.log('amine is winner');
 }
 else{
     console.log("egalite");
 }
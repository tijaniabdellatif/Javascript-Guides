
function score (name){  

    let x = Number(prompt('entrez le Score 1'));
    let y = Number(prompt('entrez le Score 2'));
    let z = Number(prompt('entrez le Score 3'));
    
    const score = [ x,y,z]
    // Average
    const output = score.reduce( (a,b) =>{
     
     return a+b;
    },0)
    
    console.log('=== the average is ===');
     var moyenne = Math.floor(output / 3);
    
     console.log('the name §{name} has an average of :'+ moyenne)
    return moyenne ;
    
    
    }
    
    // javascript dynamique
    
    const karim = score('karim');
    const amine = score('amine');
    const salim = score('salim');
    
    if (karim > amine && karim  > salim ){
        console.log('karim has a score of :'+ karim +" and win the game");
    }
     else if (amine  > karim && amine  > salim ){
        console.log('amine has a score of :'+ amine +" and win the game");
    }
    
     else if (salim > karim && salim  > amine ){
        console.log('player3 has a score of :'+ salim +" and win the game");
    }
    else{
        console.log("egalite");
    }
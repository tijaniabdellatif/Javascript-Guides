//break and continue 


const scores = [40,23,0,30,100,20];

for(let i=0 ; i<scores.length ;i++){


    if(scores[i]===0){

        console.log('u loooose',scores[i]);
        continue;
    }
    
    console.log('your score is', scores[i]);

    if(scores[i] === 100){

        console.log('congratulation you got the top score',scores[i]);
        break;
    }
}
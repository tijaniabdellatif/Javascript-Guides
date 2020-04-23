//maps 
/*  javascript is using maps like objects to organise objects  

so the solution is to map the key to some values 

maps is a new key value data structure in ES6

in objects we are limited to strings key value

but in maps we can use different data
*/
 
/*  First map */

const Questions = new Map();

Questions.set('question',"what's is CSS");
Questions.set(1,'Cascade styling sheet');
Questions.set(2, 'not sure');
Questions.set(3, 'Cascade');
Questions.set('correct',1);
Questions.set(true,'correct !!');
Questions.set(false,'wrong try again');

console.log(Questions);

console.log(Questions.get('question'));
console.log(Questions.size);


// if(Questions.has(3)){

//     Questions.delete(3);
   //console.log('yes')
// }

//question.clear();

//loop maps we can not do it with objects:

// Questions.forEach((elem,key)=>{
 
//     console.log(`this a key : ${key} and set to the value  : ${elem}`)

// })


for(const [key,value] of Questions.entries()){

      //destructing to store the key and the values into separate values
      if(typeof(key)==='number'){
        console.log(`answers ${key} : ${value}`)
      }
}


const ans = Number(prompt('write the correct answer'));

//using map to get data

console.log(Questions.get(ans === Questions.get('correct')));


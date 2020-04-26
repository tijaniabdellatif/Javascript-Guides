//workshop 1


// const some = () => {
//     let some = 0;
//     const getMoney = [
//         { name: "amine", age: 21, budget: 15000 },
//         { name: "hamid", age: 32, budget: 40000 },
//         { name: "soufiane", age: 16, budget: 3500 },
//     ];
//     getMoney.forEach(elemnt => {
//         if(elemnt.name){
//             some += elemnt.budget;
//         }
//     });

//     return some;

    
// }


// console.log(some());


//workshop 2

const free = () => {
    const product = { "tomate": 5.99, "thon": 15.99, "Monopoly": 11.99, "parshi": 35.99, "dadossa": 13.99 };
    var some = 0;
    for(const i in product){
        some+=product[i];
        
    }
    if(some >50){
        console.log(`you some is ${some} so you have free shiping`)
    }else{
        -1
    }

}

free();

//workshop 3

function perSone()
{
   arr={
    amine: 71,
    hamid: 45,
    salim: 15,
    karim: 29
   };
   for(var name in arr)
   {
       if(arr.hasOwnProperty(name))
       {
           if(arr[name]<18)
           {
            console.log(`the teenager person Among them is ${name} `);
           }
        
       }
   }
}
perSone();

//workshop 4

const fre = () => {
    const person = { name: 'amine', notes: [7, 5, 4]};
    const note =person.notes;
    var maxValue=Math.max(...person.notes);
    delete person.notes;
    person.notes = maxValue;
    console.log(person);
    
}

fre();





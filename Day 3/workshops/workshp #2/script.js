let clients =[
    {
        name:'oussama',
        total:1000
    },
    {
        name:'otman',
        total:3000
    },
    {
        name:'ayoub',
        total:2500
    },
    {
        name:'ahmed',
        total:10000
    }
]

console.log(clients)

// const freeShipping = clients.map((item)=>{
//     if(item.total > 2500){
//         return {name : item.name,shipping:'free shipping'}
//     }
//     else {
//         return {name : item.name,shipping:'pay for shipping'}
//     }
// });

//using arrow function

const freeShipping  = clients.map(item => (item.total >= 2500 ? {name :item.name,shipping :'free shipping'} : {name : item.name, shipping : 'pay for shipping'}));


console.log(freeShipping);

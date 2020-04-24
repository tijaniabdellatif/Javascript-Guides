let user = [

    { name: "amine", age: 21, budget: 15000},
    { name: "hamid", age: 32, budget: 40000 },
    { name: "soufiane", age: 16, budget: 3500 }
]



  const someMoney = user.reduce(
    (acc, val ) => acc + val.budget, 0 );


console.log(`You have ${someMoney}dh`);
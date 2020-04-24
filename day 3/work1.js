let names = [ {
        name:'amine',
        age:22,
        moneyCredit:1500 },
    {
        name:'rabii',
        age:27,
        moneyCredit:3000 },
    {
        name:'karim',
        age:33,
        moneyCredit:4500 },
    {
        name:'ayoub',
        age:25,
        moneyCredit:12000 }
]
console.log(names);


const moneyTotal = names.reduce(
    (accumulateur, valeurCourante) => accumulateur + valeurCourante.budget
    , 0
);


console.log(`you have ${someMoney}dh`); 
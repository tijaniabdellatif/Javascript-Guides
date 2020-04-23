let names = [
    {
        name:'oussama',
        moneyCredit:1000
    },
    {
        name:'otman',
        moneyCredit:3000
    },
    {
        name:'ayoub',
        moneyCredit:2500
    },
    {
        name:'ahmed',
        moneyCredit:10000
    }
]
// console.log(names);


const moneyTotal = names.reduce(
    (accu, valeurCourante) => accu + valeurCourante.moneyCredit
    , 0
);


console.log(`your total is ${moneyTotal}dh`);
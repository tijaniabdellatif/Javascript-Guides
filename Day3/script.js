

const group = () => {
    const getMoney = [
        { name: "amine", age: 21, budget: 25000 },
        { name: "hamid", age: 32, budget: 30000 },
        { name: "soufiane", age: 16, budget: 7500 },
    ];
    let some = 0;
   
    getMoney.forEach(element => {
        if(element.name){
            some += element.budget;
        }
    })

    return some;
}


console.log(group());
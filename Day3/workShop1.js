const some = () => {
    const getMoney = [
        { name: "amine", age: 21, budget: 15000 },
        { name: "hamid", age: 32, budget: 40000 },
        { name: "soufiane", age: 16, budget: 3500 },
    ];
    let somee = 0;
    // for (let i = 0 ; i <= getMoney.length; i++) {
    //     somee += getMoney[i].budget;
    //     console.log(somee);
    // }
    getMoney.forEach(element => {
        if(element.name){
            somee += element.budget;
        }
    })

    return somee;
}


console.log(some());

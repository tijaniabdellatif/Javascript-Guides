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


const free = () => {
    const product = { "tomate": 5.99, "banana": 15.99, "ball": 11.99, "car": 35.99, "vest": 13.99 };
    var some = 0;
    for(const i in product){
        some+=product[i];
        
    }
    if(some >50){
        console.log(`your some is ${some} so you have free shiping`)
    }else{
        console.log('you dont have free shiping');
    }

}

free();
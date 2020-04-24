const free = () => {
    const product = { "fati": 19, "zack": 15, "achraf": 30, "ouma": 76, "ayoub": 26 };
    const values = Object.values(product);
    console.log(values);
    for(i = 0 ; i < values.length; i++){
        if(values[i] <18){
            console.log(`the teenager person Among them is ${values[i]}`)
        }else{
            -1
        } 
    } 
}

free();
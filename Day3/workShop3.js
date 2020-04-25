const free = () => {
    const product = { "fati": 19, "zack": 15, "achraf": 30, "ouma": 13, "ayoub": 26 };
    const values = Object.values(product);
    // console.log(values);
    for(i = 0 ; i < values.length; i++){
        if(values[i] <18){
            const stk = values.indexOf(values[i]);
            // console.log(stk);
            console.log(`the teenager person Among them is ${Object.keys(product)[stk]}`)
        }else{
            -1
        } 
    } 
}

free();
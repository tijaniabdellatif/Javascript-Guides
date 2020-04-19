let age = 30; //global scoop


if(true){
    
    let age = 40;
    let name = 'shaun';
    console.log('inside',age,name);

    if(true){
        
        let age = 50;
        console.log('inside second :',age);
        var test = 'hi';
    }

}

console.log('outside : ',age,test);

//logical operator


let password = 'tijan@jajzajdo';

if(password.length > 0 && password.length < 6){

    console.log('change pass');
}

else if(password.length >=6 && password.length < 12){

    console.log('verified');
}

else {
    console.log("you are a fool");
}

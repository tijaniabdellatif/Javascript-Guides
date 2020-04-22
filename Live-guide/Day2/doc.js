// Documentation day2

const arr = ['tijani', 'karim', 'amine','blabla'];

arr.forEach((elem) => {
    console.log(elem);
});

const Func = (callbackFunc) => {
    
    let value = 30;
    callbackFunc(value);
}

Func((value) => {
    console.log(value);
});

const ul = document.querySelector('.names');

const people = ['babe','mary', 'myram','easy'];

let html = ``;
people.forEach(elem=>{
    
    html += `
        <li style="color:red;">${elem}</li>
    `
});

ul.innerHTML = html;

//bind call apply
//closure or self invoked functions

// start of workshops


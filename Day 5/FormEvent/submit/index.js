const form = document.querySelector('.sign');
//console.log(form);
const username = document.querySelector('#username');

//calling the functions
const buttonRadios = Radios();
console.log(buttonRadios);

function Radios(){
   const radios = Array.from(form).filter(elem => {
        if (elem.name === 'genre') {
             return elem;
        }
    });
     return radios;
}

function gettemplate(){
    
    let html = "";
    const response = document.querySelector('#response');
    buttonRadios.forEach(element => {
     
        if (element.checked === true && form.username.value !==true) {

            html = `<p>You've choosen the <span style="color:red;">${element.value}</span>
               and you are <span style="color:red">${form.username.value}</span>
            </p>`;

            response.innerHTML = html
        }
  
 
    });

    form.reset();
}

form.addEventListener('submit',e=>{

e.preventDefault();
 const user = form.username.value;
 const pattern = /^[a-zA-Z]{6,12}$/;
 const feedback = document.querySelector('.feedback');

    if(pattern.test(user)){
             gettemplate();
             feedback.textContent = "A valid username";
    }

    else{
        feedback.textContent="not a valid username";
    }
});

//regular expression :
//https: //regex101.com/
// ^ninja$
// ^[a-zA-Z]$ one caracter
//^[a-zA-Z]{6,12}$ word between 6 and 12
//^.{6,12 }$
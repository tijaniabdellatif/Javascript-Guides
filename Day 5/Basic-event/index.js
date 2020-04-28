const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const form = document.querySelector('form');

/* Refactoring and Reuseubale functions */

function load(target) {
    // AJAX LOAD
    var xhr = new XMLHttpRequest();
    var target = target.value + "-index.html";
    xhr.open('POST', target, true);
    xhr.onload = function () {
        document.querySelector("ul").innerHTML = this.response;
    };
    xhr.send();
}
function inputLength() {
    return input.value.length;
}

function Createelement() {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    const ul = document.querySelector('ul');
    ul.append(li);

}

function add(e){

e.preventDefault();

if (inputLength() > 0) {
    Createelement();
}
form.reset();
}

function key(e){

console.log(e.which) //keycode
if (inputLength() > 0 && e.keyCode === 13) {
    Createelement();
    form.reset();
}
}


//Events
button.addEventListener('click',add,load);
input.addEventListener('keypress',key,load);
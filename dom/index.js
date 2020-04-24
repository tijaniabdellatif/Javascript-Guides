const element = document.getElementsByTagName('h1');
console.log(element)

const arrayH1 = Array.from(element);
console.log(arrayH1) 

arrayH1.forEach(element => {
    console.log(element.parentNode);
    console.log(element.children);
})


const Second = document.querySelector('.second');
const second = document.getElementsByClassName('second');
console.log(Second);
console.log(Second[0].parentElement);

const ArraySecond = Array.form(Second);
console.log(ArraySecond)

const uniqueId = document.getElementById('first');
console.log(uniqueId.children);
console.log(uniqueId.childrenNodes);
// console.log(uniqueId.previousElementSibling);
// console.log(uniqueId.nextElementSibling);
// console.log(uniqueId.nextSibling);
const ArrayChild = Array.from(uniqueId.childNodes);
console.log(ArrayChild);
ArrayChild[1].classList.add('verb');
ArrayChild.forEach(element=>{
    if(element.ClassNae ==='test'){
        element.style.color = 'red';
    }
})
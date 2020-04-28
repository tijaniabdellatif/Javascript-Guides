//checking the window object and the document

//browser got a big object wich is window

//and document proprety is the main index.html

//now we can control them through the dom 

//see how deep we can go with datas and objects

/* the document object model it's a tree of element

we begin with root node which is the body

and we have the element node and the text node

*/

//get elementsbyTagname
const elem = document.getElementsByTagName('h1');
console.log(elem);
const arrayofelem = Array.from(elem);
console.log(arrayofelem);

//getelementsbyClassname
const element = document.getElementsByClassName('second');
console.log(element[0].parentNode);
const tab = Array.from(element);
console.log(tab[0].parentNode);


//get element by ID
const elemId = document.getElementById('first');
console.log(elemId.childNodes);

const tab3 = Array.from(elemId.childNodes);
tab3[1].classList.add('verb');

const stock = tab3.values().next();
console.log(stock);

tab3.forEach(elem =>{

    console.log("the elements are : ");
    console.log(elem);
});


//queryselector and queryselectorall get and set attributes
const selec = document.querySelectorAll('li');
console.log(selec[0].getAttribute('class'));
selec[0].setAttribute('class','defined');
console.log(selec[0].getAttribute('class'));
console.log(selec);
selec[0].innerText = 'Text modifié';
const elemArray = Array.from(selec);
console.log(elemArray);

//check about browser compatibility
//https://caniuse.com/


//changing Style
const title = document.querySelectorAll('h1');
console.log(title[0].style);
const ArrayTitle = Array.from(title);
console.log(ArrayTitle);
ArrayTitle.forEach(element =>{
    if(element.className === 'change')
    {
        element.setAttribute('style','color:red');
    }
    else if(!element.className){
        element.style.color="blue";
    }
    else{
        return -1;
    }
});

function Store(arr){
    let tab=[];
    const m = document.createElement('h2');
    m.setAttribute('class','new');
    m.innerText ='hoo';
    tab = arr.push(m);
    document.querySelector('body').prepend(m);
    return tab;
}


    Store(ArrayTitle);
    console.log(ArrayTitle);
const filtred=ArrayTitle.filter(element =>{
     return element.className ==='new';
})

console.log(filtred);
const make = ArrayTitle.map(element =>{
    if(element.className === "new"){
        const n = document.createElement('img');
        n.setAttribute('src','./images/banner.jpg');
        n.setAttribute('class','image');
        element.prepend(n);  
        return element.style.backgroundColor = "green";
    }
});


//CSS
const addAnimation = ArrayTitle.filter(element=>{
    if(element.className === '')
    {
         element.classList.add('cool');
         return element.style.display='block';
   }
    
});


const ul = document.querySelector('ul');
console.log(ul.childNodes);
const ArrayLi = Array.from(ul.childNodes);
console.log(ArrayLi);
ArrayLi.forEach(element =>{
    
    if(element.className === 'defined'){
    
          element.classList.toggle('done');
          element.classList.remove('defined');
    }
   
});

console.log(ul.parentElement.children);
const htmlelem = Array.from(ul.parentElement.children);
const x =htmlelem.forEach(elem=>{
    return elem.setAttribute('class','dist');
})
console.log(x);




    
    


















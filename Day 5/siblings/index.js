//siblings 
/* is the element in the same level of tree and they got the same 
Parent

<ul>

<li></li>
<li></li>
<li></li>
<li></li>

</ul>

Li sont des siblings

Second relation : 

<div>
<p></p>
<p></p>
<p></p>
<p></p>
</div>

Parent(div) and children(p) 

node List and Array we can be easy to use forEach
HTML Collection no
*/
const article = document.querySelector('article');
console.log(article);
let articleSup = Array.from(article.children);
console.log(articleSup);
console.log(article);
const filter =articleSup.filter(elem =>{
    if(elem.tagName !=='H2' && elem.tagName !=="DIV"){
        return elem;
    } 
});
console.log(filter);
filter.forEach(elem =>{   
    return elem.style.color="red";
});
for(key in filter){
    filter[key].textContent += ' Je suis la';
}



console.log('===============================');
articleSup.forEach(elem =>{

    elem.classList.add('item');
});

//parent
const title = document.querySelector('h2');
console.log('===============================');
console.log(title.parentElement.parentElement);
console.log('===============================');
console.log(title.parentNode);
console.log('===============================');
console.log(title.previousSibling);
console.log('===============================');
console.log(title.nextElementSibling);
console.log('===============================');
console.log(title.nextSibling.previousSibling);
console.log('===============================');
console.log(title.parentNode);
console.log('===============================');
console.log(title.parentElement.childNodes);
console.log('===============================');
console.log(title.nextElementSibling.parentElement.children);

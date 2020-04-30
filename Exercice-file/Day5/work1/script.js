
const btn = document.querySelector('.addBtn');
const ul=document.querySelector('ul');


const addAndelete=()=>
{
    //ajouter
    const add=document.querySelector("#myInput").value;
    const li=document.createElement('LI');
    if(li.innerHTML==='')
    {
        li.textContent=`${add}`;
        ul.prepend(li);
    }
    
    //supprimer
    const items=document.querySelectorAll('li');
    const custom=Array.from(items);
    supp(custom);
     
}

function supp(arr)
{
   arr.forEach(element => {
       element.addEventListener('click',e=>{
        if (e.target.tagName === 'LI') {

            e.target.remove();
            console.log('it an li event')
         }
       })
       

       
   });
   return arr;
}

btn.addEventListener('click',addAndelete);



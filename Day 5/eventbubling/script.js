/* Event bubling 

when an event occur for example a click on a element

that element become the event itself ( e.target )

the event start with target and bubles up to the parent 

*/
const ul = document.querySelector('ul');
const butt = document.querySelector('button');

function supp(arr){
   
    arr.forEach(elem=>{
        elem.addEventListener('click', e => {
             
            if(e.target.tagName==='LI'){
                 
                console.log('event in li');
                e.target.remove();
            }
           
        })

        
    })
   
    return arr;
}

const addAndSupprime= () => {
    

    const li = document.createElement('li');
    if(li.innerHTML ===''){
        li.textContent = 'new to do';
        ul.prepend(li);
    }

    const items = document.querySelectorAll('li');
    const custom = Array.from(items);
    console.log(custom);
    supp(custom);
}

butt.addEventListener('click',addAndSupprime)

//event bubling and callbacks //stoppropagation is for wipping out the bubling
ul.addEventListener('click',addAndSupprime());




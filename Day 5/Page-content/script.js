const content = document.querySelector('.content');

const people = [

    {name:'tijani' , age :40},
    {name :'abdellatif',age:30},
    {name:'karim',age:70}
];

people.forEach(elem=>{

    content.innerHTML += `<p> ${elem.name}<span style='color:red;'>${elem.age}</span></p>`
})

const filtred =people.filter(elem=>{
      
      if(elem.age > 30){
          return content.innerHTML += `<p> ${elem.name}<span style='color:red;'>${elem.age}</span></p>`;
      }
      
})

console.log(filtred);
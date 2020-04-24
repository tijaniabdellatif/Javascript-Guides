// let names = ['tijani','abdellatif','rays'];

// //boucle for uppercase 

// /*for(let i = 0;i<names.length;i++){

//     let res = names[i].toUpperCase();
//     let html = `<div> ${res} </div>`;

//     console.log(html);
// }
// */

// //boucle while

// let i = 0;
// while(i<names.length){
 
//     let res = names[i].toUpperCase();
//     let html = `<div> ${res} </div>`;

//     console.log(html);

//     i++;

// }

// // do while 

// console.log("===== boucle do while====");

// let j = 0;

// do{

//     let res = names[j].toUpperCase();
//     let html = `<div> ${res} </div>`;

//     console.log(html);

//     j++;
// } while(j < names.length)


/* comprendre break and continue */
const me = ['tijani','abdellatif',1988,'Teacher',false];

for (let i =0;i< me.length;i++){
     
    if(typeof me[i] !== 'string') continue;
    console.log("the position : "+ i +" contain:  "+ me[i]);
}

for(let i=0;i<=20;i +=8){

    console.log(i)
}
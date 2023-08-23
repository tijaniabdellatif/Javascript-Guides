// callbacks, promises, async/await

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const imageContainer = document.querySelector('.img-container');
const url = "https://source.unsplash.com/random";

const btn = document.querySelector('.btn');
btn.addEventListener('click',() => {


    loadImage(url).then((data) => {

         console.log(data);
    })
      

        // setTimeout(() => {

        //         heading1.style.color = 'red';
        //         setTimeout(() => {

        //             heading2.style.color = 'blue';

        //             setTimeout(() => {

        //                 heading3.style.color = 'orange';
        //         },2000);
        //     },1500);
        
        // },1000);     
});



function loadImage(url){

    const promise = new Promise((resolve,reject) => {

         let img = new Image();
         img.addEventListener('')

    })

    return promise;

}

// const promise = new Promise((resolve, reject) => {

//     let value = true;

//     if(value){

//          resolve('value is true',true)
//     }
//     reject('value is false',false);

// })


// promise.then((value) => {
//      console.log(value);
// }).catch((err) => {
//     console.log(err)
// })


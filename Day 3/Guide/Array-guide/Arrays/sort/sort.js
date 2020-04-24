/*sort method*/ 

/* ==== Hints ===== */

/* 
==> sort method : destructive method


*/

const names = ['karim', 'amine', 'abdellatif', 'mohamed', 'rwicha', 'rien', 'notorious'];
const newNames = names.sort();
const Decr = names.sort((a,b)=>{

    if(a>b){

        return -1;
    }
    else {
        return 1;
    }
});


console.log(newNames);
console.log(Decr);


const scores = [10, 20, 15, 35, 25, 40, 5];

//scores.sort(); // this doesn't sort it look at the first number 
//console.log(scores);

const users = [{
        name: 'tijani',
        score: 100
    },
    {
        name: 'abdellatif',
       score: 80
    },
    {
        name: 'spleux',
       score: 20
    },
    {
        name: 'lionbad',
        score: 60
    }
];

/* an arrow function (a,b) consecutive element */
users.sort((a,b)=>{

    if(a.score > b.score){

        return -1;
    }
    else if(b.score > a.score){

        return 1;
    }

    else {

        return 0;
    }

});

/*other way */

//users.sort((a,b) => b.score - a.score)
console.log(users)
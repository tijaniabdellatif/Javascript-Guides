let anime = ['onepiece','naruto','black clover'];
console.log(anime);
console.log(anime[2]);


anime[1]= 'one punch man';
console.log(anime);

let ages = [20,25,30,35];

console.log(ages[2]);


let rand = ['hi',['hola',50],40,30];
console.log(rand[[1]]);

//methods 
console.log(rand.length);
let result = anime.join(',');
console.log(result);
let res = anime.indexOf('black clover');
console.log(res);
let concat = anime.concat(rand[1]);
console.log(concat);

//adding and affecting the original value
let pu = anime.push('GTO');
console.log(pu);
console.log(anime);


let reu = anime.pop();
console.log(reu);
console.log(anime);
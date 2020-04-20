let a = 5
let b = 1
let c = a >= b
console.log(c) //true 
console.log(typeof c)//type of boolean (duh)

let d= 0;
let e = 1;
let f = d ===e;
console.log(f) //false since 0 does not equal 1 in value
console.log(typeof f) //boolean


let g = 4;
let h = 1;
let i = g <= h;
console.log(i) //false since g has a bigger value than h.

let j = 1
let k = 1
let l = j != k
console.log(l) //false because j does equal k

let m ="A";
let n = "B";
let o = m > n;
console.log(o)

let p = true
let q = false
let r = p ===q
console.log(r) //false ,of course because they do not have the same value even though they have the same data type


let s = true;
let t = true;
let u = s != t;
console.log(u)
//true have a value of 1 so S = t




3.
let greeting = "hello"
let val = greeting + " it's Rainy";
val += " out";
console.log(val)
val = ''
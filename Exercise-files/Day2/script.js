//workshop 1 

const calc = (a,b,c) => {
    a = Number(prompt('insert number here'));
    b = Number(prompt('insert number here'));
    c = Number(prompt('insert number here'));
    let delta = Math.pow(b,2) - (4*a*c);
    let x1,x2;

    if(delta < 0){
        console.log('No solution');
    } else if (delta == 0){ 
        x1 = -b / (2*a);
        console.log(`The result is ${x1}`);
    } else {
        x1 = (-b - Math.sqrt(delta))/2*a;
        x2 = (-b + Math.sqrt(delta))/2*a;
        console.log(`The solution is ${x1}, ${x2}`);
    }
}

calc();



//workshop2

// triangle function return arr 
const triangle = (ab,ac,cb,h) => {

    ab = Number(prompt('insert the value of ab'));
    ac = Number(prompt('insert the value of ac'));
    cb = Number(prompt('insert the value of cb'));
    h = Number(prompt('insert the value of h'));
    let arr = [ab,ac,cb,h];

    if(ab == ac && ac !== cb){
        console.log('this triangle is isoscel');
    } else if (ab == ac && ac == cb) {
        console.log('this triangle is equi');
    } else {
        console.log('this triangle is normal');
    }

    return arr;
}

// calculate the area
let arr = triangle();
const calcArea = (area) => {
    area = (arr[2]*arr[3])/2;
    console.log(`the area of the triangle is ${area}`);
    return area;
}

calcArea();

// calculate the perimeter
const calcPeri = (peri) => {
    peri = arr[0]+arr[1]+arr[2];
    console.log(`the perimeter of the triangle is ${peri}`);
    return peri;
}

calcPeri();

// Note : I did find it hard to start this workshop because I always think I'm bad at maths haha 😂 (It was fun!!)
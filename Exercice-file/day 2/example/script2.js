function triangle (ab,ac,cb,h){
    ab = Number(prompt('enter value AB'));
    ac = Number(prompt('enter value AC'));
    cb = Number(prompt('enter value base CB'));
    h  = Number(prompt('enter value height'));

    const triangle = [ab,ac,cb,h];

    triangle.forEach(function(item){    
    if(ab == ac && ac != cb){
            
            console.log(`triangle isocel`);
        }
        else if(ab==ac && ac==cb){
            console.log(`triangle equi`);
        }
        else{
            console.log(`normal triangle`);
        }
    });

    return triangle;

    
    
}

const rturn = triangle(); //for return the parametres array we need create variable for that
function calculArea(area){
    area = (rturn[2]*rturn[3])/2;
    console.log(`Area the triangle is ${area}`);
    return area;
}

calculArea();

function calculPreimeter(preimeter){
    preimeter = rturn[0]+rturn[1]+rturn[2];
    console.log(`Preimeter the triangle is ${preimeter}`);
    return preimeter;
}

calculPreimeter();







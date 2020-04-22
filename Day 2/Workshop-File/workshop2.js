 function Triangle (){

   ab = Number(prompt('enter the (ab) value '));
   ac = Number(prompt('enter the (ac) value  '));
   cb= Number(prompt('enter the Triangle base '));
   h = Number(prompt('enter the Triangle height  '));

    

    if(ab == ac) {

      console.log('triangle isocel');
    
       }
    else if(ab == ac == cb) {

       console.log('triangle equi');
        
       }
    else {

       console.log('normal triangle');
      
       }

 return Triangle;
  
}
Triangle(); 
function calculTriangleArea (base, height){

 
  area =  ((base * height) /2)
  console.log(`la surface de traingle est : ${area}`);
   return area
   
}
calculTriangleArea(val1, val2);
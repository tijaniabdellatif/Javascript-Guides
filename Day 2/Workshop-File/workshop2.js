function Triangle (ab,ac,cb,h){

   ab = Number(prompt('enter the (ab) value '));
   ac = Number(prompt('enter the (ac) value  '));
   cb= Number(prompt('enter the Triangle base '));
   h = Number(prompt('enter the Triangle height  '));

    const Triangle = [ab,ac,cd,h];

    if(ab == ac) {

      console.log(`triangle isocel`);
    
       }
    else if(ab==ac==cb) {

       console.log(`triangle equi`);
        
       }
    else {

       console.log(`normal triangle`);
      
       }

 return Triangle;
  
}
Triangle(); 

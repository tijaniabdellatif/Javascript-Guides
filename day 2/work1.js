
function equations( a, b, c) { 

    const  num1 =prompt("entre number a");
           num2=prompt("entre number b");
           num3=prompt("entre number c");

 a=Number (num1);
 b=Number(num2); 
 c=Number(num3);
  console.log (typeof a);
 delta = (b*b) - (4*a*c);

 x = (-b)/(2*a); 
 x1 = ((-b) - Math.sqrt(delta))/(2*a);
 x2 = ((-b) + Math.sqrt(delta))/(2*a); 

 if(delta == 0){
    alert( x );
}
 else if ( delta > 0){
     alert ( `solution one is  ${x1} and  solution two is  ${x2}`);
 }
 else {
      alert('no Solution');
 }

  }

equations(); 
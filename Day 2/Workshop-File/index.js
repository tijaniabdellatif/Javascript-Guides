function equat (a,b,c){

  a = Number(prompt('enter the (a) value '));
  b = Number(prompt('enter the (b) value  '));
  c = Number(prompt('enter the (c) value  '));

    const equat =[a,b,c];


  let delta = ((b*b) - (4*a*c));
  let x1;
  let x2;

  if(delta<0)
  {
      alert(`no soltion`);
  }  
  else if(delta==0)
  {
      x1= -b/2*a;
      alert(`la solution de l'equation est : ${x1}`);
  }
  else 
  {
      x1=(-b - Math.sqrt(delta))/2*a;
      x2=(-b + Math.sqrt(delta))/2*a;
      alert(`la solution de l'equation est : ${x1} et ${x2}`);
  }

}

 equat();
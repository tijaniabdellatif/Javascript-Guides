function people()
{
   per={
    rabii:17,
    amine: 71,
    hamid: 45,
    salim: 15,
    ayoub: 29
   };
   for(let name in per)
   {
       if(per.hasOwnProperty(name))
       {
           if(per[name]<18)
           {
            console.log(`the teenager person Among them is ${name} `);
           }

       }
   }
}
people(); 
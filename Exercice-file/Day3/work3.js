function perSone()
{
   arr={
    amine: 71,
    hamid: 45,
    salim: 15,
    karim: 29
   };
   for(var name in arr)
   {
       if(arr.hasOwnProperty(name))
       {
           if(arr[name]<18)
           {
            console.log(`the teenager person Among them is ${name} `);
           }
        
       }
   }
}
perSone();
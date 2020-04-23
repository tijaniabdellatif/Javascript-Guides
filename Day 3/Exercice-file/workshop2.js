
const shop = [{ 
    
"tomate": 5.99, 
"thon": 15.99

},
        
{
     
"Monopoly": 11.99,
 "parshi": 35.99, 
 "dadossa": 13.99 

}];

function freeshop(array)
{

     let sum=0;
      for(let i in array){
          sum+=array[i];
      }
  
      if(sum>50)
      {
         console.log(`you are free to shop `);
      }
      else
      {
       console.log(`come back later `);
      }

     
}
freeshop()



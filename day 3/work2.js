function freeshop(res)
{

     var sum=0;
      for(const i in res)
      {
          sum+=res[i];
      }
      if(sum>50)
      {
         console.log(`You are free to shop${sum}`);
      }
      else
      {
       console.log(`You cant shop ${sum}`);
      }


}
freeshop({tomate:39,dadossa:20,parshi:35})
function Sumfre(arr)
{
   
     var sum=0;
      for(const i in arr)
      {
          sum+=arr[i];
      }
      if(sum>50)
      {
         console.log(`you are free to shop because your sum ${sum}`);
      }
      else
      {
       console.log(`you are not free to shop because your sum ${sum}`);
      }
   

}
Sumfre({tomate:39,dadossa:20,parshi: 35})
let getMony={
    
    people:[
        { name: "amine",  age: 21,  budget: 15000 },
        { name: "hamid",  age: 32, budget: 40000 },
        { name: "soufiane",  age: 16, budget: 3500 }
    ],
    SumMony:function()
    {
        const fect=this.people.reduce((acc,curr)=>{

            if(curr.name)
            {
                acc+=curr.budget;
            }
            return acc;
        },0)
        
        return fect;
       
    }
};
console.log(getMony.SumMony());
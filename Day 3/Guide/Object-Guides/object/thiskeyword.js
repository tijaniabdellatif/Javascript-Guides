
    let user = {

        name:'tijani',  //key value
        age: 40,
        email : 'tijani@tijani.com',
        location: 'maroc',
        blogs:['article 1','article2'],

        affiche : function(par){
            
            var pr =  this.name+ " " + this.age;
            return pr;
             
        },

        login : function(){
         
            console.log('logged');

        },

        logout : function(){
             
            console.log('log out');

        },

        logblogs : function(){

                //console.log(this);

                //console.log("those blogs : "+"'"+this.blogs +"'"+" copyrigthed by "+this.name);
                var m =  this.affiche();
                console.log("those blogs "+this.blogs+" appartient to : "+m);
               

        }
    };



    user.logblogs();
    console.log(this);

  







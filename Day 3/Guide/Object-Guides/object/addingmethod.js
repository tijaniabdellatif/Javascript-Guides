let user = {

    name: prompt('entre name'),  //key value
    age: 40,
    email : prompt('enter email'),
    location: prompt('enter location'),
    blogs:['article 1','article2'],

    login: function(par){

        console.log('the user is logged');
        return par = 1;
    },

    logout: function(){

        console.log('the user log out')
    },

    logblogs : function(){

       //console.log(this.blogs) ; //contexte object 
       
             if(this.login(1)){
                console.log('tijani read your blog');
                this.blogs.forEach(blog => {
                   console.log(blog);
                })
             }
    }
};

let id = 1234;

if(user.name === 'tijani' && id === 1234){

    if(user.location === 'maroc'){

        user.login();
    }

    else {
     console.log(0);
     user.logout();
    }
}

else{

    user.logout();
}


user.logblogs();




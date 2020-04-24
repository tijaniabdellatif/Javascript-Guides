//object in array 
var tab = ['a','b','c'];

let user = {

    name: prompt('entre name'),  //key value
    age: 40,
    email : prompt('enter email'),
    location: prompt('enter location'),
    blogs:[
        {title:'article 1',likes:30}, //0
        {title:'article 2',likes:50}, //1   
    ],

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
                 console.log(blog.title,blog.likes);  //blog.title 
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








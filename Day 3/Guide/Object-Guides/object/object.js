/* an object is data type which contain : 

first of all we can use the console.log to see the difference

between objects and function of object


propreties and methods

@user 

email username gender : propreties

methods : login logout

*/ 


//object literal notation 


let user = {

    name:'tijani',  //key value
    age: 40,
    email : 'tijani@tijani.com',
    location: 'maroc',
    blogs:['article 1','article2']
};

console.log(user.name);
//update propreties
user.age = 35;
console.log(user.age);

console.log(user['name']);

user['name'] = 'abdellatif';
console.log(user.name);
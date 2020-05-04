/*Making a simple to Do list :
__in this workshop we will aprehend what we have seen in DOM and simple events handling

Steps to create the project are:

Using the Given HTML template :
__Create an Event on the input('keypress') and on the button('click') allowing us to add list of Todos

__add an Event that delete the items from the list of item.

__when Adding a new Item, a delete icon is added automatically and control the delete.

__Use refactoring to make the code clean and dry
*/
function arrayAverage(arr){
    // finding the sum
    var sum = 0;
    for(var i in arr){
        sum += arr[i];
    }
    // get the length of the array
    var arrayL = arr.length;
    // returning the average 
    return (sum / arrayL);
}
var arr1 = new Array(16, 45, 80);
var arr2 = new Array (19, 40, 99);
var arr3 = new Array(20, 88, 120);

var Karim = arrayAverage(arr1);
console.log(Karim);

var Amine= arrayAverage(arr2);
console.log(Amine);

var Salim = arrayAverage(arr3);
console.log(Salim);

if(Karim > Amine && Amine > Salim){
    alert('average Karim is the bigger one');
}else
 if(Amine > Karim && Karim > Salim){
     alert('average Amine is the bigger one');

}else{
    alert('average Salim is the bigger one');

}
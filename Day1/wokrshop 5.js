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
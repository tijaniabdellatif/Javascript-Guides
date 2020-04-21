function arrayAverage(arr){
    
    var sum = 0;
    for(var i in arr){
        sum += arr[i];
    }
    
    var arrayL = arr.length;
     
    return (sum / arrayL);
}
var arr1 = new Array(16, 45, 80);
var arr2 = new Array (19, 40, 99);
var arr3 = new Array(20, 88, 120);

var avg1 = arrayAverage(arr1);
console.log(avg1);

var avg2 = arrayAverage(arr2);
console.log(avg2);

var avg3 = arrayAverage(arr3);
console.log(avg3);

if(avg1 > avg2 && avg2 > avg3){
    alert('average avg1 is the bigger one');
}else
 if(avg2 > avg1 && avg1 > avg3){
     alert('average avg2 is the bigger one');

}else{
    alert('average avg3 is the bigger one');

function isEligible(arr){
    var total = 0;
    for(var i in arr){
        total += arr[i];
    }
    return total;
}

var arr = new Array(1.99, 5.99, 41.99);
var result = isEligible(arr);
console.log(result);
if (result > 50) {
        console.log('You are free to shop');
    }else{
        console.log('You cant shop');
    }
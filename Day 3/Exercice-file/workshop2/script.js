
//## workshop 2 :


  function isEligible(arr){
    var summ = 0;
    for(var i in arr){
        summ += arr[i];
    }
    return summ;
}

var arr = new Array(11.99, 35.99, 41.99);
var result = isEligible(arr);
console.log(result);
if (result > 50) {
        console.log('you are free to shop');
    }
    
    else{
        console.log('you are not');
    }
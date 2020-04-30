//workshop "2"

function Eligible(arr){
    var some = 0;
    for(var i in arr){
        some += arr[i];
    }
    return some;
}

var arr = new Array(11.99, 5.99, 41.99);
var result = Eligible(arr);
console.log(result);
if (result > 50) {
        console.log('you are free to shop');
    }else{
        console.log('you are  not');
    }


function smallestNumber(n,k) {
    var arr = [],
        result = 1;
    for(var j = 2; j <= k; j++){
        arr[j] = j;
    }
    for(j = 2; j <= k; j++){
        if(arr[j] === j){
            for( var c=j+j; c <= k; c+=j){
                if( arr[c] % (j * j) === 0){
                    arr[c] = j;
                }else{
                    delete arr[c];
                }
            }
        }
    }
    arr.forEach(function(item) {
        result *= item;
    });
    return result;
}
console.log(smallestNumber(1,20));




function maxDivisionNumbers(n) {
    var num = Math.trunc(Math.sqrt(n)),
        arr = [],
        result = 0;
    for(var k = 2; k <= num; k++){
        arr[k] = k;
    }
    for(k = 2; k*k <= num; k++){
        if(arr[k] === k){
            for( var j=k*k; j<= num; j+=k){
                delete arr[j];
            }
        }
    }
    for(var t = num; t >= 1; t--) {
        if(arr[t] >= 1 && n % arr[t] === 0){
            result = arr[t];
            break;
        }
    }
    return result;
}
console.log(maxDivisionNumbers(600851475143));

// 13195
//600851475143



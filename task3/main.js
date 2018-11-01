function maxDivisionNumbers(n) {
    var arr = [];
    for(var k = 2; k <= n; k++){
        arr[k] = true;
    }
    for(k = 2; k*k <= n; k++){
        if(arr[k] === k){
            for( var j=k*k; j<=n; j+=k){
                arr[j] = false;
            }
        }
    }
/*    var d = 0;
    for(var t = n; t >= 1; t--) {
        if(arr[t] >= 1 && n % arr[t] === 0){
            d = arr[t];
            break;
        }
    }
    return d;*/
    return arr;
}
console.log(maxDivisionNumbers(27));

// 13195
//600851475143



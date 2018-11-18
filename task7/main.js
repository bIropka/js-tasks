function maxDivisionNumbers(n) {
    var num = n*2,
        arr = [],
        result = 0;
    for(var k = 2; k <= num; k++){
        arr[k] = k;
    }
    for(k = 2; k*k <= num; k++){
        if(arr[k] === k){
            for( var j=k*k; j<= num; j+=k){
                arr[j] = false;
            }
        }
    }
    var array= [];
    for(var t = 1; t < n; t++){
        if(arr[t]){
            array.push(t);
        }
    }
    return array;
}
console.log(maxDivisionNumbers(6));

// 13195
//600851475143



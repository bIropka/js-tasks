function maxDivisionNumbers(n) {
    var arr = [1];
    for(var k = 2; k < n; k++){

        arr.forEach(function(item){
            if( k % item === 0){
                console.log(k);
                arr.push(k);
            }
        });
    }
    return arr;
}
console.log(maxDivisionNumbers(27));
/*var arr = [0];
arr.forEach(function(item) {
    j = 2 / item;
    arr.push(j);
});
console.log(arr);*/

/*function isprime(n){
    for(var i = 2; i < n; i++){
        if(n%i === 0){
            for( var d = 2; d*d < i; d++){
                if(i%d === 0){
                    console.log(n/i);
                    // return(n/i);
                }
            }
        }
    }
}*/
/*console.log(isprime(13195));*/


// console.log(maxDivisionNumbers(13195));

//377
// 13195
//600851475143
//10086647

/*
function sieve(n){
    var S = [];
    for( var k=2; k<=n; k++){
        S[k]=1;
    }
    for( var k=2; k*k<=n; k++){
        // если k - простое (не вычеркнуто)
        if(S[k]==1){
            // то вычеркнем кратные k
            for(l=k*k; l<=n; l+=k){
                S[l]=0;
            }
        }
    }
    return S;
}

console.log(sieve(13195));*/

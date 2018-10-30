/*function maxDivisionNumbers(n) {

    var myArr = [];
    while ( i > 1 ) {
        if (n % i === 0) {
            if(i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0){
                myArr.push(i);
                break;
            }
        }
        i--;
    }
    return myArr;
}*/
function isprime(n){
    var result = 0;
    for(var i = 7; i < n; i++){
        if(n%i === 0){
            for( var d = 7; d*d < i; d++){
                if(i%d === 0){
                    console.log(i);
                }
            }
        }

    }
    return result;
}
console.log(isprime(13195));
//maxDivisionNumbers();

// console.log(maxDivisionNumbers(13195));

//377
// 13195
//600851475143

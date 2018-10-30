function smallestNumber(n,k) {
    if(n == 1){
        n++;
    }
    var d=2;
    // перебираем возможные делители от 2 до sqrt(n)
    while(n <= k){
        for(; d<=n; d++){

            if(n % d === 0){
                console.log(d);
            }
        }
        n++;
    }
}
console.log(smallestNumber(2,10));
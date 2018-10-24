function fibonachiNumbers(n) {

    var j = 1,
        k = 1,
        result = 0;

    for (var i = 1; i <= n; i++) {

        var summ = j + k;
        j = k;
        k = summ;

        if( k % 2 === 0 && k < n) {
            result += k;
        }

    }

    return result;

}

console.log(fibonachiNumbers(4000000));
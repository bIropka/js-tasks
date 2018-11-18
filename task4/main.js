function myfun(n) {
    for(var j = 1; String(j).length <= n; j++){
        var limit = j;
    }
    for(var num = limit * limit; num > 1; num--){
        var palinrome = String(num).split('').map(Number);
        if( palinrome.join('') === palinrome.reverse().join('')){
            var i = limit;
            var result = 1;
            while (String(i).length >= n){
                if(+(palinrome.join(''))% i === 0 && String((+(palinrome.join(''))) / i).length === n){
                    result = (+(palinrome.join('')));
                    return result;
                }
                i--;
            }
        }
    }
}

console.log(myfun(5));

// 906609

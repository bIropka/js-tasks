function maxDivisionNumbers() {

    for (var i = 2; i <= 5; i++) {

/*        if( j % 2 === 0 && j < n) {
            j += j;
        }*/
        for (var j = 2; j <= 5; j++){
            if( i % j !== 0 && i / j !== i){
                console.log(i);
            }
        }

    }

     // return j;

}

// console.log(maxDivisionNumbers(5));
maxDivisionNumbers();
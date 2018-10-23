//console.log(fibonachiNumbers(100));

function fibonachiNumbers() {

    var i=1, j=1;
    for( ; i < 10; i++){
        if( j !== i * i ){
            console.log(j);
            j++;
        }
    }

}

fibonachiNumbers();
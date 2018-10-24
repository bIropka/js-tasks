//console.log(fibonachiNumbers(100));

function fibonachiNumbers() {

    var summ = 0;

    for (var i = 1; i < 10; i++ ){

        if( summ < i){

            while (summ < i){
                summ += i;
                console.log(summ);
            }


        } else {
            summ += i;
            console.log(summ);
        }

    }

}

fibonachiNumbers();


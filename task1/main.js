console.log(sumNumbers(1000));

function sumNumbers(num) {
    var count = 0;
    for (var i = 3; i < num; i++){

        if(i % 3 == 0 || i % 5 == 0){
            count += i;
        }

    }
    return count;
}

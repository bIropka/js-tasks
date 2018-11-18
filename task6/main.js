function differenceSumSquares(i,j){
    var sum = 0,
        squares = 0;
        result = 0;
    for(;i <= j; i++){
        sum += i*i;
    }
    squares = ((j * j)/2 + j/2);
    result = (squares*squares) - sum;
    return result;
}
console.log(differenceSumSquares(1,100));


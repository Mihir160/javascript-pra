function getFactorial(number){
    let factorial = 1;
    for(let i = 0; i<=7 ; i++){
        factorial = factorial + i;
    }
    return factorial;
}

const factorial = getFactorial(8);
console.log('factorial is:', factorial);
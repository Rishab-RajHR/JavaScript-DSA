function fcRecursion(n){
    if(n === 1){
       return 1;
    }

    return n*fcRecursion(n-1);
}
console.log(fcRecursion(5));
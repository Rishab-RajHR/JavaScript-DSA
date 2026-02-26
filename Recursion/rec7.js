function sumDigit(n) {
    if (n === 0) return 0;

    return (n%10) + sumDigit(Math.floor(n/10))
}
console.log(sumDigit(123));
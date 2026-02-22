// Input : [1, 2, 4, 5]
// Output: 3  -> Missing Number

let arr = [1, 2, 4, 5]
let n = 5

let exp = n*(n+1)/2;
let actual = arr.reduce((a,b)=>a+b,0);
console.log(exp-actual);

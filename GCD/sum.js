// Input - [1,2,3,4]
// Output - 10


let arr = [1, 2, 3, 4];

// let result = arr.reduce((sum, val)=> sum + val, 0)

// console.log(result)

let sum = 0;

for(let i of arr){
    sum += i;
}

console.log(sum);
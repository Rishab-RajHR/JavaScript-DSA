// Check all elements are unique or not


function isUnq(arr){
     let set = new Set(arr);

     return set.size === arr.length;
}

console.log(isUnq([1,2,3,4]));  // True
console.log(isUnq([1,2,2,4]));  // False
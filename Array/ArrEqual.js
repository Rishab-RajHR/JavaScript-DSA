// [1,2,3] & [1,2,3] -> true
// [1,2,3] & [3,2,1] -> false

// Check If Two Arrays Are Equal  (Order Matters)

function arrayEqual(a, b) {
    if(a.length !== b.length)
      return false;

    for(let i=0; i<a.length; i++){
       if(a[i] !== b[i])
         return false;
    }
    return true;
}

console.log(arrayEqual([1,2,3],[1,2,3]));
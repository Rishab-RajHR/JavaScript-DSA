function allPositive(arr) {
    for(let i=0; i<arr.length; i++) {
         if(arr[i] < 0) {
             return false;
         }
    }
    return true;
}
console.log(allPositive([2,5,7,1]));
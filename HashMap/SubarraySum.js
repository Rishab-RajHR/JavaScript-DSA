// Brute Force => Two Sum
// TC : o(n^2)  , SC : o(1)

function subArrSum(arr,k){
   for(let i=0; i<arr.length; i++){
      let sum = 0;
      for(let j=i; j<arr.length; j++){
          sum += arr[j];

          if(sum === k) {
             return true;
          }
      }
   }
   return false;
}

console.log(subArrSum([1,2,3,4],6))

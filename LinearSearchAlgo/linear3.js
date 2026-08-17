// Find the First Occurence

function firstOccur(arr,target){
   for(let i=arr.length-1; i>=0; i--){
      if(arr[i] === target){
          return i
      }
   }
   return -1;
}
console.log(firstOccur([10,20,30,20,40], 20));
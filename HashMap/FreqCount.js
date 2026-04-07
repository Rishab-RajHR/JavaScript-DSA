// Input = [1,2,2,3,1,4,2]
// Output = {1:2,2:3,3:1,4:1}

function freqCount(arr){
   let map = {};

   for(let num of arr){
      map[num] = (map[num] || 0) + 1;
   }
   return map;
}
console.log(freqCount([1,2,2,3,1,4,2]))
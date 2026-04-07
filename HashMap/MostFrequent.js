// Input = [1,2,2,3,1,4,2]
// Output = 2

function mostFreq(arr){
    let map = {};
    let maxCount = 0;
    let result = null;

    for(let num of arr) {
       map[num] = (map[num] || 0) + 1;

       if(map[num] > maxCount){
          maxCount = map[num];
          result = num;
       }
    }
    return result;
}
console.log(mostFreq([1,2,2,3,1,4,2]))
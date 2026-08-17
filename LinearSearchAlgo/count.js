function countOccur(arr,target){
    let count = 0;
    for(let num of arr){
       if(num === target){
          count++;
       }
    }
    return count;
}
console.log(countOccur([10,20,30,20,40],20));
function upperBound(arr, target){
     let start = 0;
     let end = arr.length - 1;
     let answer = arr.length;

     while(start <= end) {
         let mid = Math.floor((start + end)/2);

         if(arr[mid] <= target){
              answer = mid;
              start = mid + 1;
         }
         else {
             end = mid - 1;
         }
     }
     return answer;
}
console.log(upperBound([10,20,30,40,50],25));
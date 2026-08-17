// Lower Bound
// Input : [10,20,30,40,50]
// Target : 25
// Output : 2

function lowerBound(arr, target){
      let start = 0;
      let end = arr.length - 1;
      let answer = arr.length;

      while(start <= end){
          let mid = Math.floor((start + end)/2);

          if(arr[mid] >= target){
               answer = mid;
               end = mid-1;
          } else {
              start = mid + 1;
          }
      }
      return answer;
}
console.log(lowerBound([10,20,30,40,50],25));
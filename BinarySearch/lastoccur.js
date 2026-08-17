// Last occurence 

function lastOcc(arr,target){
     let start = 0;
     let end = arr.length-1;
     let answer = -1;

     while(start <= end){
         let mid = Math.floor((start+end)/2);

         if(arr[mid] === target){
              answer = mid;
              start = mid + 1; // Right Search
         } else if(target < arr[mid]) {
              end = mid - 1;
         } else {
            start = mid + 1;
         }
     }
     return answer;
}

console.log(lastOcc([10,20,30,40,50], 40));
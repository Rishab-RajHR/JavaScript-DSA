// Input = [10, 20, 20, 20, 50]
// 20


// 1st occurence

function firstOcc(arr,target){
    let start = 0;
    let end = arr.length - 1;
    let answer = -1;

    while(start <=  end) {
         let mid = Math.floor((start+end)/2);

         if(arr[mid] === target){
             answer = mid;
             end = mid - 1;  // Left Search
         } else if(target < arr[mid]){
             end = mid - 1;
         } else {
            start = mid + 1;
         }
    }
    return answer;
}
console.log(firstOcc([10,20,30,40,50],20));
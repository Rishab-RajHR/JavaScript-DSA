// 1st occurence

function firstOcc(arr,target){
    let start = 0;
    let end = arr.length-1;
    let answer = -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(arr[mid] === target){
              answer = mid;
              end = mid - 1;  // left search
        } else if(target < arr[mid]){
             end = mid - 1;
        }  else {
             start = mid + 1;
        }
    }
    return answer;
}
console.log(firstOcc([10,20,30,40,50],20));


// last Occurence

function lastOcc(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let answer = -1;

    while(start <=  end) {
        let mid = Math.floor((start+end)/2);

        if(arr[mid] === target){
               answer = mid;
               start = mid + 1;
        } else if(target < arr[mid]) {
             end = mid - 1;
        } else {
             start  = mid + 1;
        }
    }

    return answer;
}

console.log(lastOcc([10,20,30,40,50], 40));

// Count occurence

function countOcc(arr,target){
    let first = firstOcc(arr,target)
    let last = lastOcc(arr,target)

    if(first === -1){
        return 0;
    }
    return last - first + 1;
}

console.log(countOcc([10,20,20,20,50],20));
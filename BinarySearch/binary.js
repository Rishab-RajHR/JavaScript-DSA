// Binary Search works on sorted array only

function binarySearch(arr,target){
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(arr[mid] === target){
           return mid;
        }
        if(target < arr[mid]){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}
console.log(binarySearch([10,20,30,40,50,60,70],30));
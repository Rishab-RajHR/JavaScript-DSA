function maxSubArraySum(arr, k){
    let windowSum = 0;
    let maxSum = 0;

    for(let i=0; i<k; i++){
       windowSum += arr[i];
    }

    maxSum = windowSum;
    // Sliding window
    for(let i=k; i<arr.length; i++){
        windowSum += arr[i]; // add next element
        windowSum -= arr[i-k]; // remove left element
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
console.log(maxSubArraySum([2,1,5,1,3,2],3));
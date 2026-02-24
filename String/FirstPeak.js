// Input: [1, 3, 2, 4, 1]
// Output: 3

// Find First Peak Element

function firstPeak(arr) {
    for(let i=1; i<arr.length - 1; i++) 
      {
        if(arr[i]>arr[i-1] && arr[i] > arr[i+1])
        {
            return arr[i];
        }
    }
}

console.log(firstPeak([1, 3, 2, 4, 1]));
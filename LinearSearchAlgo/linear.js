// Linear Search Algorithm

// I/P = [10,20,30,40,50]
// O/P = 30

function linearSearch(arr,target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1;
}

console.log(linearSearch([10,20,30,40,50], 30));
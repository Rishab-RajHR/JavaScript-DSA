
function twoSum(arr,target){
    let map = {};

    for(let i=0; i<arr.length; i++){
        let comp = target-arr[i];

        if(map[comp] != undefined){
            return [map[comp], i]
        }
        map[arr[i]] = i;
    }
    return [];
}

console.log(twoSum([2,7,11,15], 9))
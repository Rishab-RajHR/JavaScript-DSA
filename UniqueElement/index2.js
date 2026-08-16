// First Unique element in an array

function firstUniq(arr){
    let map = {};

    for(let num of arr) {
        map[num] = (map[num] || 0)+1;
    }

    for(let num of arr){
       if(map[num] === 1) return num;
    }
    return -1;
}

console.log(firstUniq([2,2,4,2,3,5]));
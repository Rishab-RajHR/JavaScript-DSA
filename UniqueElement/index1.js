// Find the unique elements

function findUnique(arr){
    let map = {};

    for(let num of arr){
      map[num] = (map[num] || 0)+1;
    }

    let result = [];

    for(let key in map){
       if(map[key] === 1){
           result.push(Number(key));
       }
    }
    return result;
}

console.log(findUnique([1,2,2,3,4,4]));
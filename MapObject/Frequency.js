function freq(arr){
     let map = new Map();

     for(let num of arr){
        map.set(num, (map.get(num) || 0)+1);
     }
     return map;
}
console.log(freq([1,2,2,3,3,3]));
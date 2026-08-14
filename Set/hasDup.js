function hasDup(arr){
    let set = new Set();

    for(let num of arr) {
        if(set.has(num)) return true;
        set.add(num);
    }
    return false;
}

console.log(hasDup([1,2,3,1]));
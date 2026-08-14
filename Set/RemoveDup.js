// let set = new Set([1,2,3,3,4]); => removing duplicate

function remoDub(arr){
    return [...new Set(arr)]
}
console.log(remoDub([1,2,2,3,4]));


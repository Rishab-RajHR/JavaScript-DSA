let obj = {a:1,b:2};

console.log(delete obj.a);
console.log(obj);

let map = new Map([
    ["a",1],
    ["b",2]
])
console.log(map.delete("a"))
console.log(map)
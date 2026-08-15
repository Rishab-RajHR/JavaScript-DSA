let obj = {};

// String overrides the Integer
obj[1] = "Number Key";
obj["1"] = "String key";

console.log(obj);
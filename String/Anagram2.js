// Anagram => same character present but order doesn't matter

function isAnagram(s,t){
    s = s.toLowerCase().replace(/\s+/g,"");
    t = t.toLowerCase().replace(/\s+/g,"");

     return s.split("").sort().join("") === t.split("").sort().join("")
}
console.log(isAnagram("Listen", "silent"));
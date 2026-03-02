// Anagram => same character present but order doesn't matter

function isAnagram(s,t){
    s = s.toLowerCase().replace(/\s+/g,"");
    t = t.toLowerCase().replace(/\s+/g,"");

    if(s.length !== t.length)  return false;

    let freq = {};

    for(let ch of s){
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for(let ch of t) {
        if(!freq[ch]) return false;
        freq[ch]--;
    }
    return true;
}
console.log(isAnagram("Listen", "silent"));
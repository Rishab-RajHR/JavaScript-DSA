// Input: "aabccc"
// Output: {a: 2, b: 1, c: 3}

function charFrequency(str){
    let freq = {};

    for(let ch of str){
        freq[ch] = (freq[ch] || 0) + 1;
    }
    return freq;
}
console.log(charFrequency("aabccc"));

// Count the frerquency of characters

function charFreq(str) {
    let freq = {};

    for(let ch of str){
        freq[ch] = (freq[ch] || 0)+1;
      }
     return freq;
}
console.log(charFreq("banana"));
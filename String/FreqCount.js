// Count the frerquency of characters

function charFreq(str) {
    let freq = {};
    // For handling the Uppercase value
    str = str.toLowerCase().replace(/\s+/g,"");

    for(let ch of str){
        freq[ch] = (freq[ch] || 0)+1;
      }
     return freq;
}
console.log(charFreq("banana"));
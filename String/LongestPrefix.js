// Input: "aaabbb"
// Output: 3

// Find the Longest Prefix of Same Characters

function LongestSamePrefix(str){
    if(str.length === 0)
       return 0;

    let first = str[0];
    let count = 1;

    for(let i=1; i<str.length; i++) {
        if(str[i] === first) count++;
        else break;
    }
    return count;
}
console.log(LongestSamePrefix("aaabbb"));
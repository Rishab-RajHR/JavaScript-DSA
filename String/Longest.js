// Input: ["js", "react", "javascript"]
// Output: "javascript"

// Find Longest String in Array (Shortcut Way)

const arr = ["js", "react", "javascript"];

const longest = arr.reduce((a,b)=> a.length > b.length ? a : b);


console.log(longest);
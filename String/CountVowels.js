// Input: "Mohit Decodes"
// Output: 5

// Count Vowels in a String (Shortcut Way - Regex + match)

const str = "Mohit Decodes";

const count = str.match(/[aeiou]/gi)?.length || 0;

console.log(count);
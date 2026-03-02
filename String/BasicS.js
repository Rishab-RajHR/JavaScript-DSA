let n = "Alex";
console.log(n[0]);

for(let i=0; i<n.length; i++)
{
    console.log(n[i]);
}


// String we can't change the existing string we have to make the new string
let s = "Tovino";
s[0] = "L";
console.log(s);
console.log(s.length);

// To convert into LowerCase() and UpperCase()

console.log(s.toUpperCase());
console.log(s.toLowerCase());


// For splitting the string
let t = "JavaScript";
console.log(t.substring(0,4));
console.log(t.slice(4,10));



// Check if the character is present or not
console.log(t.includes("Script"));


// For concatenation of the string
let a = "Hello";
let b = "World";
console.log(a + " " + b);

// For comparison
console.log(a === b);
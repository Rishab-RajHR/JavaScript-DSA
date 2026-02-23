// Input - [20, 45, 150, 30]
// Output - Check If Any Element Is Greater Than 100 by using some() Method

// In some() if one element(condition) is True it return true 

const arr = [20, 45, 150, 30];

const hasBig = arr.some(x => x > 100);

console.log(hasBig);
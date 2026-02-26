// Input = "   hello   world  "
// Output = "helloworld"

const str = "  hello   world  ";

const noSpace = str.replace(/\s+/g,"");

console.log(noSpace);
let a = 12;
let b = 18;

while(b !== 0){
    let remainder = a%b;
    a = b;
    b = remainder;
}
console.log("GCD IS :", a);
let x = 12;
let y = 18;

let a = x;
let b = y;

while( b !== 0) {
    let rem = a % b;
    a  = b;
    b = rem;
}

let gcd = a;

let lcm = (x*y)/gcd;

console.log('LCM IS :', lcm);
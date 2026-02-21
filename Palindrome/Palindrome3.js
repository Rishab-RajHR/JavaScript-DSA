function isPal(str) {
    const cleaned = str.toLowerCase();
    const reversedStr = cleaned.split("").reverse().join("");
    return cleaned === reversedStr;
}

console.log(isPal("MadaM")); // true
function reemVowels(str){
   const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
   let arr = str.split("");

   let left = 0;
   let right = 0;

   while(right < arr.length){
     if(!vowels.has(arr[right])){
        arr[left] = arr[right];
        left++;
     }
     right++;
   }
   return arr.slice(0, left).join("");
}
console.log(reemVowels("Mohit"));
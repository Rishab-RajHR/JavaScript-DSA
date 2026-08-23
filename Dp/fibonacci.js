// Through Recursion

// function fib(n){
//     if(n <= 1){
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// }
// console.log(fib(6));




// Through Memoization (Top Down Approach) [TC:O(n)]

// function fibo(n, memo={}){
//     if(n <= 1){
//         return n;
//     }
//     if(memo[n]){
//         return memo[n]
//     }
//     memo[n] = fibo(n-1,memo) + fibo(n-2, memo);
//     return memo[n];
// }
// console.log((fibo(6)));



// Tabulation (Bottom to Top)

// function fibo(n){
//     if(n <= 1) {
//         return n;
//     }
//     let dp = [0, 1];
//     for(let i=2; i<=n; i++) {
//        dp[i] = dp[i-1] + dp[i-2];
//     }
//     return dp[n];
// }

// console.log(fibo(6));



// Space Optimization DP

function fibo(n){
   if(n <= 1){
      return n;
   }
   let prev2 = 0;
   let prev1 = 1;
   for(let i=2; i<=n; i++){
      let current = prev1 + prev2;
      prev2 = prev1;
      prev1 = current;
   }
   return prev1;
}

console.log(fibo(6));
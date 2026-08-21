// In greedy alogorithm we search for best solution
// Every step we should select best option


// Coin change function Example

function coinchange(amount){
    const coins = [10,5,2,1];
    let result = [];

    for(let coin of coins){
        while(amount >= coin){
            result.push(coin);
            amount -= coin;
        }
    }
    return result;
}
console.log(coinchange(28));
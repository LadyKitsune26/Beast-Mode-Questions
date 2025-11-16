/** Stock Trading
 * 
 * Given an array of 'prices', find the transaction that will yield the greatest profits.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing 
 * a different day in the future to sell that stock.
 * 
 * @examples
 * stocks([8, 3, 6, 1, 6, 4, 7]) -> 6
 * stocks([1, 8, 3, 4]) -> 7
 * stocks([2, 9, 18, 9, 2]) ->  16
 */





// // David's SOlution #1
// const stocks = (prices) => {
//   let l = 0;
//   let r = 1;
//   maxProfit = 0;

//   for (let r = 1; r < prices.length; ++r) {
//     const profit = prices[r] - prices[l];
//     if (profit > 0) {
//       maxProfit = Math.max(maxProfit, profit);
//     } else {
//       l = r;
//     }
//   }

//   return maxProfit;
// };

// module.exports = stocks;



// David's Solution #2
const stocks = (prices) => {
  let l = 0;
  let r = 1;
  maxProfit = 0;

  while (r < prices.length) {
    const profit = prices[r] - prices[l]
    if (profit > 0) {
      maxProfit = Math.max(maxProfit, profit);
    } 
    else {
      l = r;
    }
    ++r;
  }

  return maxProfit;
};

module.exports = stocks;















// // Chat GPT Solution
// const stocks = (prices) => {
//   let minPrice = prices[0];
//   let maxProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     const price = prices[i];

//     // Check potential profit if selling today
//     const profit = price - minPrice;
//     if (profit > maxProfit) {
//       maxProfit = profit;
//     }

//     // Update the minimum price seen so far
//     if (price < minPrice) {
//       minPrice = price;
//     }
//   }

//   return maxProfit;
// };

// module.exports = stocks;
/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.`
 */
//   0    1    2    3    4    5
// [10,  20, 100,  50,  30, 200] -> 190
//   0    1    2    3    4    5
// [10,   0,   0,  10,   0,  10] -> 0

// find the min value
// find the max value AFTER min position
function bestProfit(stockPrices) {
  if (!stockPrices.length || !Array.isArray(stockPrices)) return 0;
  let lowestPrice = Infinity;
  let highestPrice = -Infinity;
  let pos = 0;
  let i = 0;
  while(i < stockPrices.length) {
    let stockPrice = stockPrices[i];
    if (stockPrice <= lowestPrice) {
      lowestPrice = stockPrice;
      pos = i;
    }
    if (stockPrice >= highestPrice && i > pos) {
      highestPrice = stockPrice
    }
    i += 1;
  }
  return highestPrice > 0 ? highestPrice - lowestPrice : 0;
}

module.exports = bestProfit;

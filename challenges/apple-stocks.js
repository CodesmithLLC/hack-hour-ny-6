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
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday)) return 0;

  let max = stock_prices_yesterday[0],
    min = stock_prices_yesterday[0];

  stock_prices_yesterday.forEach(function(num) {
    if (num > max) max = num;
    if (num < min) min = num;
  });

  return max - min > 0 ? max - min : 0;
}

function bestProfit(prices) {
  // Edge cases: Input not an array or empty array. Return 0.
  if (!Array.isArray(prices) || !prices.length) return 0;

  // Use first price to initialize lowest price to buy.
  // Initialize highest profit as 0.
  let buy = prices[0],
    profit = 0;

  // Loop through array.
  for (let i = 0; i < prices.length; i++) {
    // If we see a price lower than our lowest price so far,
    // set our lowest price so far to that lower price.
    buy = Math.min(buy, prices[i]);

    // Set profit to highest between itself and newest price
    // minus lowest price.
    profit = Math.max(profit, prices[i] - buy);
  }

  // Return profit value at the end.
  return profit;
}

module.exports = bestProfit;

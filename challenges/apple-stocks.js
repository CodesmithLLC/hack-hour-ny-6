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
<<<<<<< HEAD
  // initialize high and low arrays
  const high = [];
  const low = [];

  // populate highLow by adding min again while it is less than current value
  let i = 0;
  while (stock_prices_yesterday[i]) {
    if (stock_prices_yesterday[i] > high[high.length - 1]) {
      high.push(stock_prices_yesterday[i]);
    } else {
      high.push(high[high.length - 1]);
    }

    if (stock_prices_yesterday[i] < low[low.length - 1]) {
      low = stock_prices_yesterday[i];
    } else {
      low.push(low[low.length - 1]);
    }
    i++;
  }

  // compare high and low indecies to determine whether they're before each other

=======
>>>>>>> d2afe028ebc5bad5a3fb49863c5b47b7c011089c

}

module.exports = bestProfit;

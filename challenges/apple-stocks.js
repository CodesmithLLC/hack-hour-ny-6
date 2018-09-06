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
  if(!stock_prices_yesterday.length) return 0;
  let high = stock_prices_yesterday[0];
  let low = stock_prices_yesterday[0];
  let bestBuy = -Infinity
  for(let i=1;i<stock_prices_yesterday.length;i++) {
    if(stock_prices_yesterday[i] > high) {
      high = stock_prices_yesterday[i];
    }
    if(stock_prices_yesterday[i] < low) {
      if((high - low) > bestBuy) {
        bestBuy = (high-low);
      }
      low = stock_prices_yesterday[i];
      high = -Infinity
    }
  }
  return bestBuy;
}

// function bestProfit(curHigh = 0, low = stock_prices_yesterday[0], high = stock_prices_yesterday[0], stock_prices_yesterday) {
//   console.log(stock_prices_yesterday)
//   console.log('high',curHigh)
//   console.log('h ',high)
//   console.log('l ',low)
//   stock_prices_yesterday.length === 0 ? curHigh : high > stock_prices_yesterday[0] ? bestProfit(curHigh, low, high = stock_prices_yesterday[0], stock_prices_yesterday.slice(1)) : bestProfit(curHigh=high-low, low = stock_prices_yesterday[0], high = -Infinity, stock_prices_yesterday.slice(1))
// }

// let arr = [];
// for(let i = 0; i < 10; i++) {
//   arr.push(Math.round(Math.random() * 1000))
// }
module.exports = bestProfit;
// console.log(bestProfit(arr))

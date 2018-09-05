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
// slope = (y2 - y1) / (x2 - x1)

// function bestProfit2(prices) {
//   const stack = []
//   const highest = []
//   const lowest = []

//   prices.forEach(price => {})
// }

// Brute Force
function bestProfit(prices) {
  if (!Array.isArray(prices) || prices.length === 0) {
    return 0
  }

  const maxProfit = []

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = 0; j < prices.length; j++) {
      if (i !== j) {
        const difference = prices[j] - prices[i]
        maxProfit.push(difference)
      }
    }
  }

  return Math.max(...maxProfit) > 0 ? Math.max(...maxProfit) : 0
}

// const prices = [500, 400, 500, 500, 500, 500, 500, 500, 600, 500, 500, 500]

// console.log(bestProfit2(prices), 'should be 200')

module.exports = bestProfit

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
  const  currPrice = { lowest: Infinity, lowIndex: null, highest: -Infinity, highIndex: null };
  const  indeces = { lowest: Infinity, highest: -Infinity }
  const bestPrices = [];
  for (let i=0; i < stock_prices_yesterday.length; i++){
    if (stock_prices_yesterday[i] < currPrice.lowest){
      if (currPrice.lowest < currPrice.highest){
        const priceToStore = { ...currPrice };
        bestPrices.push(priceToStore);
      }
      currPrice.lowest = stock_prices_yesterday[i]
      currPrice.highest = -Infinity
      //currPrice.highest = 0;
    } else {
      if (stock_prices_yesterday[i] > currPrice.highest) {
        currPrice.highest = stock_prices_yesterday[i];
      }
    }
    console.log(currPrice);
  }
  bestPrices.push(currPrice)
  console.log({bestPrices});
}

bestProfit([10, 5, 8, 6, 11, 3, 2, 8, 5, 12])

module.exports = bestProfit;

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
  let minIndex = 0, 
      maxProfit = 0,
      currMin = 0, 
      maxIndex = 1;

  let stocks = stock_prices_yesterday;
  // console.log('inside stocks ', stocks);
  if(stocks.length < 2){
    return 0;
  }
  for(let i = 0; i < stocks.length; i++){
    // console.log(stocks[i]);
    if(stocks[i] < stocks[currMin]){
      currMin = i;
      // console.log('inside currMin', currMin);
    }
    if(stocks[maxIndex] - stocks[minIndex] < stocks[i] - stocks[currMin]){
      maxIndex = i;
      minIndex = currMin;
      // console.log('Subtracting indices ', stocks[maxIndex] - stocks[minIndex])
    }
  }
  maxProfit = stocks[maxIndex] - stocks[minIndex];
  // console.log('My max profit ', maxProfit)
  return maxProfit;
}

module.exports = bestProfit;

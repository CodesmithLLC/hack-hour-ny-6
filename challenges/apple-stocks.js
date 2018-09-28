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


[1000,998,997,999]

function bestProfit(stock_prices_yesterday) {
  if(!stock_prices_yesterday.length || !Array.isArray(stock_prices_yesterday)) return 0;

  //Time to buy stock (at it's lowest)
  let buyTime = -Infinity;

  //Time to sell stock (at it's highest)
  let sellTime = -Infinity;

  //Price of lowest stock 
  let buyStock = Infinity;

  //Price of highest stock 
  let sellStock = -Infinity;

  let result = sellStock - buyStock;

  for( let currTime = 0; currTime < stock_prices_yesterday; currTime++ ){
    //Price of current stock greater than price of previous high stock?
    if(stock_prices_yesterday[currTime] > sellStock){
      //Time of current stock in check past time of highest stock?
      if(currTime > buyTime){
        //Re-assign stock and time
        sellStock = stock_prices_yesterday[currTime];
        sellTime = currTime;
      }
    } 

    //Price of current stock less than price of previous low stock?
    if(stock_prices_yesterday[currTime] < buyStock) {
      //Time of current stock in check past time of lowest stock?
      if(currTime < sellTime){
        //Re-assign stock and time
        buyStock = stock_prices_yesterday[currTime];
        buyTime = currTime;
      }
  }
}

  if(result > 0) return result;
  return 0;
}

module.exports = bestProfit;

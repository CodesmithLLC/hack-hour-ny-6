/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */
function mean(array) {
  return Math.floor(array.reduce((a, b) => a + b)/array.length);
}

function mode(array) {
  const cache = {
    'mode': {
      'count': 0,
    },
  };

  for (let i = 0; i < array.length; i += 1) {
    const cv = `${array[i]}`;
    if (cache[cv]) {
      cache[cv].count += 1;
      if (cache.mode.count < cache[cv].count) cache.mode.count = cache[cv];
    }
    else {
      cache[cv] = { 
        'n': cv,
        count: 1,
      }
    }
  }

  if (cache.mode.count === 1) return null;
  else return cache.mode.n;
}

function modemean(array) {
  return mode(array) === mean(array) ? true : false;
}

module.exports = modemean;

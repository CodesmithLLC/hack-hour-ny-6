/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross
 *  the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

// ---------------
// Solution: O(n) Time, O(1) Space
// Calculate the distance from the starting point to the ending point
// (EndX - StartX)^2 + (EndY - StartY)^2 < r^2
// For each circle...
// If the radius is less than the distance between the start and end points...
// The distance from START to circle border is less than the radius squared
// (StartX - CenterX)^2 + (StartY - CenterY)^2 < r^2
// The distance from END to circle border is less than the radius squared
// (EndX - CenterX)^2 + (EndY - CenterY)^2 < r^2
function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  const distanceBetweenPoints = Math.hypot(start_x - end_x, start_y - end_y)
  let count = 0

  // Loop through each circle
  for (let i = 0; i < x.length; i++) {
    if (r[i] < distanceBetweenPoints) {
      count +=
        Math.hypot(x[i] - start_x, y[i] - start_y) < Math.pow(r[i], 2) ? 1 : 0
      count +=
        Math.hypot(x[i] - end_x, y[i] - end_y) < Math.pow(r[i], 2) ? 1 : 0
    }
  }

  return count
}

const x = [0, 0, 0, 0, 0, -7, 4, 4, 4, 6, 2, 0]
const y = [0, 0, 0, 0, 3, -7, 0, 0, 0, 0, -2, 0]
const r = [0.3, 0.5, 0.7, 1, 1, 3, 0.3, 0.7, 1, 0.2, 0.2, 1.2]
const start_x = 0
const start_y = 0

const end_x = 4
const end_y = 0

console.log(circleCountry(x, y, r, start_x, start_y, end_x, end_y))

module.exports = circleCountry

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

/**
 * Key observations:
 *   - Does not specify straight-lines
 *   - Does not care about distance or length traveled, only borders
 *   - Thefore, unless there are infinite number of circles (which
 *       would be outside the bounds of discrete calculation),
 *       we, therefore, only care about parent, nested circles
 *   - Likewise, we can ignore sibling nested circles
 */
function circleCountry(
  xCoords,
  yCoords,
  radii,
  start_x,
  start_y,
  end_x,
  end_y
) {
  /* Distance between points */
  const distBetweenPoints = Math.sqrt(
    Math.pow(end_x - start_x, 2) + Math.pow(end_y - start_y, 2)
  )

  /* start point */
  const startDistancesSquared = xCoords.map((x, i) => {
    const y = yCoords[i]
    return Math.pow(start_x - x, 2) + Math.pow(start_y - y, 2)
  })
  const startNestedCircleDistances = startDistancesSquared.filter((dist, i) => {
    const r = radii[i]
    return dist < Math.pow(r, 2)
  })
  const startNestedRadii = radii.filter((r, i) => {
    const dist = startDistancesSquared[i]
    return dist < Math.pow(r, 2)
  })

  /* end point */
  const endDistancesSquared = xCoords.map((x, i) => {
    const y = yCoords[i]
    return Math.pow(end_x - x, 2) + Math.pow(end_y - y, 2)
  })
  const endNestedCircleDistances = endDistancesSquared.filter((dist, i) => {
    const r = radii[i]
    return dist < Math.pow(r, 2)
  })
  const endNestedRadii = radii.filter((r, i) => {
    const dist = endDistancesSquared[i]
    return dist < Math.pow(r, 2)
  })

  const bordersFromStart = startNestedRadii.filter(r => r < distBetweenPoints)
  const bordersFromEnd = endNestedRadii.filter(r => r < distBetweenPoints)

  return bordersFromStart.length + bordersFromEnd.length

  // return {
  //   startDistancesSquared,
  //   endDistancesSquared,
  //   startNestedRadii,
  //   endNestedRadii,
  //   startNestedCircleDistances,
  //   endNestedCircleDistances,
  //   betweenPoints
  // }
}

// const x = [0, 0, 0, 0, 0, -7, 4, 4, 4, 6, 2, 0]
// const y = [0, 0, 0, 0, 3, -7, 0, 0, 0, 0, -2, 0]
// const r = [0.3, 0.5, 0.7, 1, 1, 3, 0.3, 0.7, 1, 0.2, 0.2, 1.2]
// const start_x = 0
// const start_y = 0

// // const end_x = 4
// // const end_y = 0
// const end_x = 0
// const end_y = -0.95

// console.log(circleCountry(x, y, r, start_x, start_y, end_x, end_y))

module.exports = circleCountry

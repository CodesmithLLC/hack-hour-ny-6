/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  // copy of grid
  let gridC = grid.slice(),
    result = [];
  for (let i = 0; i < grid.length; i++) {
    let temp = [];
    for (let j = 0; j < grid[i].length; j++) {
      temp.push(gridC[grid.length - 1 - j][i]);
    }
    result.push(temp);
  }
  return result;
}

module.exports = rotateGrid;

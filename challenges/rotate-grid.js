/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 * 
 *                            1:        [   [1, 2],
 *                                          [3, 4] ]
 *                                        
 *                                      
 *                           2:         [   [3, 1],
 *                                          [4, 2] ]
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
  let lastArr = grid[n - 1];

  for( let i = 0; i < n - 1; i++ ){
    debugger;
    grid[i].unshift(grid[i + 1].shift());
    grid[i + 1].push(grid[i].pop());
    debugger;
  }

  return grid;

}

let sample = [ [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9] ];

console.log(rotateGrid(sample, 3));

module.exports = rotateGrid;

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
 * ROTATE 3
 * [9,8,7]
 * [6,5,4]
 * [3,2,1]
 *ROTATE 4
 * BONUS: Do this in place
 * ROTATE 0
 * 1,2,3,4,5,6,7,8,9
 * ROATE 1
 * 7,4,1,8,5,2,9,6,3
 * ROTATE 2
 * 9,8,7,6,5,4,3,2,1
 * roate 3
 * 
 * 
 */

function rotateGrid(grid, n) {
  if(grid.length === 0) return 8;
  if(n === 0) return grid;
  let newGrid = [];
  let numElems = grid.length;

  for(let o = 0; o < numElems; o++) {
    newGrid.push([])
  }

  let count = 0;
  for(let j = 0; j < grid.length; j++) {
    while(numElems > count) {
      newGrid[count].unshift(grid[j][count])
      count++
    }
    count = 0;
  }
  n--;
  return rotateGrid(newGrid, n)
}

module.exports = rotateGrid;
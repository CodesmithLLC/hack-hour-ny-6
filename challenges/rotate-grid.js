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
  const rotatedGrid = [];
  for (let i=0; i<n; i++){
    rotatedGrid.push([]);
  }
  for (let i=0; i<grid.length; i++){
    const currArr = grid[i];
    for (let j=0; j<currArr.length; j++){
      rotatedGrid[j].unshift(currArr[j]);
    }
  }
  return rotatedGrid
}

// function rotateGrid(grid, n) {
//   console.log({grid});
//   for (let i=0; i<grid.length; i++){
//     const currArr = grid[grid.length-(i+1)];
//     console.log({currArr});
//     for (let j=0; j<currArr.length; j++){
//       console.log('grid[j]', grid[j]);
//       console.log({j});
//       grid[j].push(currArr[j]);
//     }
//   }
//   return grid;
// }

const grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
console.log(rotateGrid(grid, 4));

module.exports = rotateGrid;

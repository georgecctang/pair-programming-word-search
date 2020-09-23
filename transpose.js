const transpose = function(matrix) {
  // Put your solution here
  /*
  0. create empty result array
  1. loop over each array
  2. grab array[0] for each array, and push to new array.
  3. push this array 
  3. Repeat for array[1], array[2]... 
  */

  let numColumns = matrix.length;
  let numRows = matrix[0].length;
  let output = []; 

  for (let row = 0; row < numRows; row ++) {
    let temp = [];
    
    for (let column = 0; column < numColumns; column ++) {
      temp.push(matrix[column][row]);
    }
    output.push(temp);
    // => [matrix[0][0], matrix[1][0], matrix[2][0]...]
  }
  
  return output;
};

module.exports = { transpose };


// // Do not edit this function.
// const printMatrix = (matrix) => {
//     for (const row of matrix) {
//         for (const el of row) {
//             process.stdout.write(el + " ");
//         }
//         process.stdout.write('\n')
//     }
// }



// printMatrix(transpose([
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]));

// console.log('----')
// printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]));

// console.log('----')

// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));

// /* 

// Expected Output:

// 1 1 1 1 
// 2 2 2 2 
// 3 3 3 3 
// 4 4 4 4
// ----
// 1 3 5 
// 2 4 6
// ----
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7
// */
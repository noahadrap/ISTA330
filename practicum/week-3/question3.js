/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  if (n === 0) return [];
  if (n === 1) return [[1]];
  var result = [];
  for (var row = 1; row <= n; row++) {
      var arr = [];
      for (var col = 0; col < row; col++) {
          if (col === 0 || col === row - 1) {
              arr.push(1);
          } else {
              arr.push((result[row-2][col-1] + result[row-2][col]));
          }
      }
      result.push(arr);
  }
  return result;
};
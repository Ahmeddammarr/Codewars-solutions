//https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference (arr: number[][]): number {
  var n = arr.length
  var diag1 = 0
  var diag2 = 0
  for (var i = 0; i < n; i++) {
    diag1 += arr[i][i]
    diag2 += arr[i][n - i - 1]
  }
  return Math.abs(diag1 - diag2)
}

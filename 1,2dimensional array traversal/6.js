// 격자판 최대합

const solution = (arr) => {
  let answer = 0;
  let row = 0;
  let column = 0;
  let diagonalLeft = 0;
  let diagonalRight = 0;
  let n = arr.length;

  // row와 column
  for (let i = 0; i < n; i++) {
    // 초기화를 해줘야한다. 해주지 않으면 누적이 되기 때문
    row = column = 0;
    for (let j = 0; j < n; j++) {
      row += arr[i][j];
      column += arr[j][i];
    }
    answer = Math.max(answer, row, column);
  }

  for (let i = 0; i < n; i++) {
    diagonalLeft += arr[i][i];
    diagonalRight += arr[i][n - i - 1];
  }
  answer = Math.max(answer, diagonalLeft, diagonalRight);
  return answer;
};

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

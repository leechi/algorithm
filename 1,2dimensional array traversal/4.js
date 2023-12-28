// 연속으로 정답

const solution = (arr) => {
  let result = 0;
  let cnt = 0;
  arr.map((number, i) => {
    if (number === 1) {
      cnt += 1;
      result += cnt;
      console.log(cnt, result);
    } else if (number === 0) {
      cnt = 0;
    }
  });
  return result;
};

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

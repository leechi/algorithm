// 등수구하기

const solution = (arr) => {
  let n = arr.length;
  let result = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) {
        result[i]++;
      }
    }
  }
  return result;
};

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

// 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때, 맨 앞에서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성

const solution = (arr) => {
  const answer = []; // 바로 숫자를 구하지 않고 배열에 넣은 이유는 언젠가 그 아이들을 찾고 싶을까봐
  let max = arr[0];
  answer.push(max);
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      answer.push(arr[i]);
      max = arr[i];
      console.log(max);
    }
  }
  return answer.length;
};

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

function solution(s) {
  let answer = "YES";
  const string = s.toLowerCase().replace(/[^a-z]/g, "");
  if (string.split("").reverse().join("") !== string) return "NO";
  return answer;
}
let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

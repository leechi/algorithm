function solution(s) {
  let answer = "YES";
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === s[s.length - i - 1].toLowerCase()) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  }
  return answer;
}

let str = "mom";
console.log(solution(str));

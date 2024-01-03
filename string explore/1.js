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

function solution2(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

let str = "moooooom";
console.log(solution(str));
console.log(solution2(str));

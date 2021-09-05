function solution(str) {
  let cnt = 0;
  let word = [];
  for (let i = 0; i < str.length; i++) {
    // word안에 이미 들어간 문자라면 word를 비워주고 str[i]를 새로운 시작점으로 지정
    if (word.includes(str[i])) {
      // 만약 현재 cnt보다 word의 길이가 더 길다면, update
      if (cnt < word.length) {
        cnt = word.length;
      }
      word = [str[i]];
      // word안에 중복되는 문자가 없다면, 그대로 push 해준다.
    } else {
      word.push(str[i]);
    }
  }
  // 중복되는 경우가 하나도 없어서 그대로 통과한 경우를 처리
  if (cnt === 0) {
    cnt = word.length;
  }
  return cnt;
}

exports.solution = solution;

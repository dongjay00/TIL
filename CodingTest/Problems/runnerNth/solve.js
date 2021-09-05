function solution(arr, num) {
  let allRunners = [];

  // 2차원 배열을 1차원 배열로 만들어 주고
  arr.forEach((runners) => {
    allRunners = allRunners.concat(runners);
  });

  // 오름차순 정렬을 해준다
  allRunners.sort((a, b) => a - b);
  return allRunners[num - 1];
}

exports.solution = solution;

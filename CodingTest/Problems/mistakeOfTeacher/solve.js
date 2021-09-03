function solution(nums) {
  // 원래 배열 index 값에 +1한 값들로 새 배열을 만들어 주고
  const correctNums = nums.map((num) => nums.indexOf(num) + 1);

  // 새로 만든 배열에서, 원래 배열에 없는 값만 골라낸다.
  return correctNums.filter((num) => !nums.includes(num));
}

exports.solution = solution;

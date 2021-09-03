const { solution } = require("./solve");

const test1 = {
  input: [1, 3, 4, 8],
  answer: [2],
};

const test2 = {
  input: [22, 99, 88],
  answer: [1, 2, 3],
};

const test3 = {
  input: [1, 2, 3],
  answer: [],
};

const test4 = {
  input: [12, 2, 3],
  answer: [1],
};

const test5 = {
  input: [11, 21, 3],
  answer: [1, 2],
};

const test6 = {
  input: [1, 2, 3, 5, 8, 10, 12, 15, 18, 20],
  answer: [4, 6, 7, 9],
};

describe("everyArray", () => {
  test("1, 3, 4, 8", () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });

  test("22, 99, 88", () => {
    expect(solution(test2.input)).toEqual(test2.answer);
  });

  test("1, 2, 3", () => {
    expect(solution(test3.input)).toEqual(test3.answer);
  });

  test("12, 2, 3", () => {
    expect(solution(test4.input)).toEqual(test4.answer);
  });

  test("11, 21, 3", () => {
    expect(solution(test5.input)).toEqual(test5.answer);
  });

  test("1, 2, 3, 5, 8, 10, 12, 15, 18, 20", () => {
    expect(solution(test6.input)).toEqual(test6.answer);
  });
});

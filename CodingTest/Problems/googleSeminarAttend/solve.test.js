const { solution } = require("./solve");

const test1 = {
  input: [
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  answer: 2,
};

const test2 = {
  input: [
    [2, 2],
    [2, 2],
    [3, 3],
    [4, 4],
  ],
  answer: 3,
};

const test3 = {
  input: [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ],
  answer: 4,
};

const test4 = {
  input: [
    [1, 2],
    [2, 8],
    [3, 4],
    [4, 4],
  ],
  answer: 4,
};

const test5 = {
  input: [
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 4],
  ],
  answer: 4,
};

const test6 = {
  input: [
    [1, 1],
    [2, 2],
    [2, 4],
    [3, 4],
  ],
  answer: 4,
};

describe("everyString", () => {
  test("test1", () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });

  test("test2", () => {
    expect(solution(test2.input)).toEqual(test2.answer);
  });

  test("test3", () => {
    expect(solution(test3.input)).toEqual(test3.answer);
  });

  test("test4", () => {
    expect(solution(test4.input)).toEqual(test4.answer);
  });

  test("test5", () => {
    expect(solution(test5.input)).toEqual(test5.answer);
  });

  test("test6", () => {
    expect(solution(test6.input)).toEqual(test6.answer);
  });
});

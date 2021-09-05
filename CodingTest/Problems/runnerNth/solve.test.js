const { solution } = require("./solve");

const test1 = {
  input: {
    arr: [
      [3, 33, 24, 45],
      [6, 7, 9, 66],
      [3, 5, 88, 98],
      [4, 9, 55, 99],
    ],
    num: 12,
  },
  answer: 55,
};

const test2 = {
  input: {
    arr: [[1, 3]],
    num: 1,
  },
  answer: 1,
};

const test3 = {
  input: {
    arr: [[3]],
    num: 1,
  },
  answer: 3,
};

const test4 = {
  input: {
    arr: [
      [1, 2],
      [3, 4],
    ],
    num: 3,
  },
  answer: 3,
};

const test5 = {
  input: {
    arr: [
      [1, 3, 3, 4],
      [1, 5, 6, 7],
      [1, 2, 3, 99],
      [1, 2, 3, 100],
    ],
    num: 11,
  },
  answer: 4,
};

const test6 = {
  input: {
    arr: [
      [4, 5, 6, 7, 8],
      [11, 12, 13, 14, 15],
      [15, 16, 19, 33, 35],
      [6, 8, 20, 22, 88],
      [8, 55, 66, 77, 100],
    ],
    num: 11,
  },
  answer: 13,
};

describe("everyObject", () => {
  test("Object1", () => {
    expect(solution(test1.input.arr, test1.input.num)).toEqual(test1.answer);
  });

  test("Object2", () => {
    expect(solution(test2.input.arr, test2.input.num)).toEqual(test2.answer);
  });

  test("Object3", () => {
    expect(solution(test3.input.arr, test3.input.num)).toEqual(test3.answer);
  });

  test("Object4", () => {
    expect(solution(test4.input.arr, test4.input.num)).toEqual(test4.answer);
  });

  test("Object5", () => {
    expect(solution(test5.input.arr, test5.input.num)).toEqual(test5.answer);
  });

  test("Object6", () => {
    expect(solution(test6.input.arr, test6.input.num)).toEqual(test6.answer);
  });
});

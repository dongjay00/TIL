const { solution } = require("./solve");

const test1 = {
  input: {
    time: [2, 3, 4, 5],
    distance: [2, 6, 7, 8],
  },
  answer: 2,
};

const test2 = {
  input: {
    time: [1, 2, 8, 9],
    distance: [0, 1, 2, 3],
  },
  answer: 0,
};

const test3 = {
  input: {
    time: [1, 4, 4, 5],
    distance: [4, 4, 9, 10],
  },
  answer: 4,
};

const test4 = {
  input: {
    time: [1, 8, 9, 10],
    distance: [10, 10, 10, 10],
  },
  answer: 2,
};

const test5 = {
  input: {
    time: [1, 1, 1, 1],
    distance: [10, 10, 10, 10],
  },
  answer: 4,
};

const test6 = {
  input: {
    time: [1, 2],
    distance: [1, 2],
  },
  answer: 1,
};

describe("everyObject", () => {
  test("Object1", () => {
    expect(solution(test1.input.time, test1.input.distance)).toEqual(
      test1.answer
    );
  });

  test("Object2", () => {
    expect(solution(test2.input.time, test2.input.distance)).toEqual(
      test2.answer
    );
  });

  test("Object3", () => {
    expect(solution(test3.input.time, test3.input.distance)).toEqual(
      test3.answer
    );
  });

  test("Object4", () => {
    expect(solution(test4.input.time, test4.input.distance)).toEqual(
      test4.answer
    );
  });

  test("Object5", () => {
    expect(solution(test5.input.time, test5.input.distance)).toEqual(
      test5.answer
    );
  });

  test("Object6", () => {
    expect(solution(test6.input.time, test6.input.distance)).toEqual(
      test6.answer
    );
  });
});

const { solution } = require("./solve");

const test1 = {
  input: "abcd",
  answer: 4,
};

const test2 = {
  input: "abcab",
  answer: 3,
};

const test3 = {
  input: "bbbb",
  answer: 1,
};

const test4 = {
  input: "asscssf",
  answer: 2,
};

const test5 = {
  input: "yeongmin",
  answer: 7,
};

const test6 = {
  input: "noooeoool",
  answer: 2,
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

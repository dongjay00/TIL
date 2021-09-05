const { solution } = require("./solve");

const test1 = {
  input: {
    puzzle: [
      ["가", "나", "콜", "사"],
      ["라", "기", "로", "세"],
      ["미", "모", "리", "움"],
      ["상", "지", "곤", "타"],
    ],
    word: "콜로세움",
  },
  answer: true,
};

const test2 = {
  input: {
    puzzle: [
      ["가", "나", "콜", "사"],
      ["라", "기", "로", "세"],
      ["미", "모", "리", "움"],
      ["상", "지", "곤", "타"],
    ],
    word: "참기름",
  },
  answer: false,
};

const test3 = {
  input: {
    puzzle: [
      ["헬", "나", "삵", "사"],
      ["로", "키", "랑", "세"],
      ["숭", "티", "리", "움"],
      ["니", "농", "카", "타"],
    ],
    word: "헬로키티",
  },
  answer: true,
};

const test4 = {
  input: {
    puzzle: [
      ["고", "양", "시", "사"],
      ["로", "이", "랑", "세"],
      ["숭", "티", "리", "움"],
      ["니", "농", "카", "타"],
    ],
    word: "고양이",
  },
  answer: true,
};

const test5 = {
  input: {
    puzzle: [
      ["고", "양", "콘", "사"],
      ["블", "이", "스", "세"],
      ["루", "티", "탄", "움"],
      ["마", "블", "틴", "타"],
    ],
    word: "콘스탄틴",
  },
  answer: true,
};

const test6 = {
  input: {
    puzzle: [
      ["게", "양", "콘", "사"],
      ["보", "린", "스", "세"],
      ["루", "을", "먹", "어"],
      ["마", "블", "틴", "요"],
    ],
    word: "게보린을먹어요",
  },
  answer: true,
};

describe("everyObject", () => {
  test("Object1", () => {
    expect(solution(test1.input.puzzle, test1.input.word)).toEqual(
      test1.answer
    );
  });

  test("Object2", () => {
    expect(solution(test2.input.puzzle, test2.input.word)).toEqual(
      test2.answer
    );
  });

  test("Object3", () => {
    expect(solution(test3.input.puzzle, test3.input.word)).toEqual(
      test3.answer
    );
  });

  test("Object4", () => {
    expect(solution(test4.input.puzzle, test4.input.word)).toEqual(
      test4.answer
    );
  });

  test("Object5", () => {
    expect(solution(test5.input.puzzle, test5.input.word)).toEqual(
      test5.answer
    );
  });

  test("Object6", () => {
    expect(solution(test6.input.puzzle, test6.input.word)).toEqual(
      test6.answer
    );
  });
});

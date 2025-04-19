import { countWordsProps, countWordsReturns, countWords } from "./count-words";

describe("countWords", () => {
  it("should return the correct word count sorted by frequency and alphabetically", () => {
    const input: countWordsProps = {
      sentence: "bar baz foo foo zblah zblah zblah baz toto bar",
      n: 3,
    };

    const expected: countWordsReturns[] = [
      ["zblah", 3],
      ["bar", 2],
      ["baz", 2],
    ];

    const result = countWords(input);

    expect(result).toEqual(expected);
  });

  it("should return an empty array when the sentence is empty", () => {
    const input: countWordsProps = {
      sentence: "",
      n: 3,
    };

    const expected: countWordsReturns[] = [];

    const result = countWords(input);

    expect(result).toEqual(expected);
  });

  it("should return the correct number of words when n is less than the number of unique words", () => {
    const input: countWordsProps = {
      sentence: "a b a b c d a b c",
      n: 2,
    };

    const expected: countWordsReturns[] = [
      ["a", 3],
      ["b", 3],
    ];

    const result = countWords(input);

    expect(result).toEqual(expected);
  });

  it("should return the correct word count even with ponctuation", () => {
    const input: countWordsProps = {
      sentence: "bar baz,foo foo zblah.zblah zblah baz toto bar",
      n: 3,
    };

    const expected: countWordsReturns[] = [
      ["zblah", 3],
      ["bar", 2],
      ["baz", 2],
    ];

    const result = countWords(input);

    expect(result).toEqual(expected);
  });
});

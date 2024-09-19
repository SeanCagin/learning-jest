import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./funcs.js";

describe("capitalize", () => {
  test("empty string", () => {
    const str = "";
    expect(capitalize(str)).toEqual("");
  });
  test("regular string", () => {
    const str = "a";
    expect(capitalize(str)).toEqual("A");
  });
  test("already caps", () => {
    const str = "AaB";
    expect(capitalize(str)).toEqual("AaB");
  });
  test("no arg", () => {
    expect(() => capitalize()).toThrow();
  });
});

describe("reverse string", () => {
  test("empty string", () => {
    const str = "";
    expect(reverseString(str)).toEqual("");
  });
  test("string of odd length", () => {
    const str = "abcde";
    expect(reverseString(str)).toEqual("edcba");
  });
  test("string of even length", () => {
    const str = "abcdef";
    expect(reverseString(str)).toEqual("fedcba");
  });
  test("no arg", () => {
    expect(() => reverseString()).toThrow();
  });
});

describe("calculator", () => {
  test.each([
    [4, 5],
    ["4", 5],
    [4, "5"],
    ["4", "5"],
  ])("two nonzero args", (a, b) => {
    expect(calculator.add(a, b)).toBe(9);
    expect(calculator.subtract(a, b)).toBe(-1);
    expect(calculator.multiply(a, b)).toBe(20);
    expect(calculator.divide(a, b)).toBeCloseTo(0.8);
  });

  test("second arg 0", () => {
    const a = 3;
    const b = 0;
    expect(calculator.add(a, b)).toBe(3);
    expect(calculator.subtract(a, b)).toBe(3);
    expect(calculator.multiply(a, b)).toBe(0);
    expect(() => calculator.divide(a, b)).toThrow();
  });

  test("add throws with undefined", () => {
    expect(() => calculator.add(undefined, 3)).toThrow("undefined arguments");
    expect(() => calculator.add(3)).toThrow("undefined arguments");
    expect(() => calculator.add(undefined, undefined)).toThrow(
      "undefined arguments"
    );
  });

  test("subtract throws with undefined", () => {
    expect(() => calculator.subtract(undefined, 3)).toThrow(
      "undefined arguments"
    );
    expect(() => calculator.subtract(3, undefined)).toThrow(
      "undefined arguments"
    );
    expect(() => calculator.subtract(undefined, undefined)).toThrow(
      "undefined arguments"
    );
  });

  test("multiply throws with undefined", () => {
    expect(() => calculator.multiply(undefined, 3)).toThrow(
      "undefined arguments"
    );
    expect(() => calculator.multiply(3, undefined)).toThrow(
      "undefined arguments"
    );
    expect(() => calculator.multiply(undefined, undefined)).toThrow(
      "undefined arguments"
    );
  });

  test("divide throws with undefined", () => {
    expect(() => calculator.divide(undefined, 3)).toThrow(
      "undefined arguments"
    );
    expect(() => calculator.divide(3, undefined)).toThrow(
      "undefined arguments"
    );
    expect(() => calculator.divide(undefined, undefined)).toThrow(
      "undefined arguments"
    );
  });
});

describe("caesar cipher", () => {
  test("empty string", () => {
    expect(caesarCipher("", 3)).toEqual("");
  });
  test("simple lowercase string", () => {
    expect(caesarCipher("xyz", 3)).toEqual("abc");
  });
  test("simple uppercase string", () => {
    expect(caesarCipher("QRT", 3)).toEqual("TUW");
  });
  test("simple mixed string", () => {
    expect(caesarCipher("HeLLo", 3)).toEqual("KhOOr");
  });
  test("complex mixed string", () => {
    expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
  });
  test("invalid args 1", () => {
    expect(() => caesarCipher("Hello, World")).toThrow();
  });
  test("invalid args 2", () => {
    expect(() => caesarCipher(undefined, 3)).toThrow();
  });
  test("non integer shift", () => {
    expect(() => caesarCipher("hola", 2.5)).toThrow();
  });
});

describe("analyze array", () => {
  test("empty array", () => {
    expect(analyzeArray([])).toEqual({ average: 0, min: 0, max: 0, length: 0 });
  });
  test("normal array", () => {
    expect(analyzeArray([1, 4, 2, 5, 3, 16, -10])).toEqual({
      average: 3,
      min: -10,
      max: 16,
      length: 7,
    });
  });
  test("array with invalids", () => {
    expect(() => analyzeArray([1, null, 2, undefined, NaN, 16, -10])).toThrow();
  });
  test("invalid arg 1", () => {
    expect(() => analyzeArray(null)).toThrow();
  });
  test("invalid arg 2", () => {
    expect(() => analyzeArray("why hello there")).toThrow();
  });
});

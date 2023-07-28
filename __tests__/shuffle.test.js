const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  let testArr = [123, 234, 345, 456]
  test("The data returned is an array", () => {
    expect(Array.isArray(shuffle(testArr))).toBe(true)

  })

  test("The length of the array has not changed", () => {
    expect(shuffle(testArr).length).toBe(testArr.length)

  })
});

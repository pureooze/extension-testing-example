import sum from "src/simpleModule.js";

describe("simpleModule.js ", () => {
  describe("sum ", () => {
    it("should return sum of three values", () => {
      expect(sum(1, 2, 3)).toBe(6);
    });
  });
});

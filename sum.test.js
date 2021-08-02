const sum = require("./sum");

test("Add 2 numbers properly", () => {
  expect(sum(1, 2)).toBe(3);
});

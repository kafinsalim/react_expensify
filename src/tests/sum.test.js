const addx = (a, b) => {
  return a + b;
};

test("adds 1 + 2 to equal 3", () => {
  const result = addx(1, 2);
  expect(result).toBe(3);
});

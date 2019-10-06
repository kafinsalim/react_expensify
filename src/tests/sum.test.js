const addx = (a = 0, b = 0) => {
  return a + b;
};

test("adds 1 + 2 to equal 3", () => {
  const result = addx(1, 2);
  expect(result).toBe(3);
});

test("adds nothing", () => {
  const result = addx();
  expect(result).toBe(0);
});

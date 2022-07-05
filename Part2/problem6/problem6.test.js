const fullPrima = require("./problem6");

test("Test input n=1", () => {
  expect(fullPrima(2)).toEqual(true);
});
test("Test input n=2", () => {
  expect(fullPrima(3)).toEqual(true);
});
test("Test input n=11", () => {
  expect(fullPrima(11)).toEqual(false);
});
test("Test input n=13", () => {
  expect(fullPrima(13)).toEqual(false);
});
test("Test input n=23", () => {
  expect(fullPrima(23)).toEqual(true);
});
test("Test input n=29", () => {
    expect(fullPrima(29)).toEqual(false);
  });
  test("Test input n=37", () => {
    expect(fullPrima(37)).toEqual(true);
  });
  test("Test input n=41", () => {
    expect(fullPrima(41)).toEqual(false);
  });
  test("Test input n=43", () => {
    expect(fullPrima(43)).toEqual(false);
  });
  test("Test input n=53", () => {
    expect(fullPrima(53)).toEqual(true);
  });

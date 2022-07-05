const faktorBilangan = require("./problem2.1");

test("Test 1", () => {
  expect(faktorBilangan(6)).toEqual("6\n3\n2\n1\n");
});
test("Test 2", () => {
  expect(faktorBilangan(20)).toEqual("20\n10\n5\n4\n2\n1\n");
});
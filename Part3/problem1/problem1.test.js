const playWithAsterik = require("./problem1");

test("Test 1", () => {
  expect(playWithAsterik(5)).toEqual(
    "    * \n   * * \n  * * * \n * * * * \n* * * * * "
    );
});

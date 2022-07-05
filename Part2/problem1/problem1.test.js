const finalScore = require("./problem1")

test("Test studentScore=80", () => {
    expect(finalScore(80)).toEqual("Nilai A");
  });
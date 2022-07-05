const drawXYZ = require("./problem2");

test("Test 1", () => {
  expect(drawXYZ(3)).toEqual("Y Z X \nZ Y X \nY Z X \n");
});
test("Test 2", () => {
    expect(drawXYZ(5)).toEqual("Y Z X Z Y \nX Y Z X Z \nY X Y Z X \nZ Y X Y Z \nX Z Y X Y \n");
  });
  test("Test 3", () => {
    expect(drawXYZ(1)).toEqual("Y \n");
  });
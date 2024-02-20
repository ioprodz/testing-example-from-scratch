const BgGreen = "\x1b[42m";
const BgRed = "\x1b[41m";
const ResetColor = "\x1b[0m";

function test(description, cb) {
  console.log(description);
  cb();
}

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        console.log(
          BgRed,
          `failed : got '${result}' expecting '${expected}'`,
          ResetColor
        );
      } else {
        console.log(BgGreen, `PASSED`, "\x1b[0m", ResetColor);
      }
    },
  };
}

module.exports = {
  test,
  expect,
};

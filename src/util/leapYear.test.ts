import leapYearText, { isLeapYear } from "./leapYear";

describe("isLeapYear", () => {
  test("whether it correctly identifies a leap year which is divisible by 4 but not by 100 or 400", () => {
    expect(isLeapYear(2020)).toBe(true);
  });

  test("whether it correctly identifies that a year which is divisible by 100 is not a leap year if not divisble by 400", () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  test("whether it correclty identifies a leap year if it is divisble by 100 AND 400", () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  test("whether it correclty identifies a non-leap year", () => {
    expect(isLeapYear(2019)).toBe(false);
  });
});

describe("leapYearText", () => {
  test("whether a positive string is displayed", () => {
    expect(leapYearText(2020)).toBe("The year 2020 is a leap year.");
  });

  test("whether a negative string is displayed", () => {
    expect(leapYearText(2019)).toBe("The year 2019 is no leap year.");
  });
});

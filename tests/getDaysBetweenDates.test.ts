import {getDaysBetweenDates} from "../src/functions/getDaysBetweenDates";

describe('getDaysBetweenDates', () => {
  test('calculates the correct number of days between two dates', () => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-01-31');
    expect(getDaysBetweenDates(startDate, endDate)).toBe(30);
  });

  test('returns 0 if the dates are the same', () => {
    const date = new Date('2023-01-01');
    expect(getDaysBetweenDates(date, date)).toBe(0);
  });
});
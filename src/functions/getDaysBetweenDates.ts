/**
 * Calculates the number of days between two dates.
 *
 * @param {Date} startDate - The start date.
 * @param {Date} endDate - The end date.
 * @returns {number} The number of days between the two dates.
 */
export const getDaysBetweenDates = (startDate: Date, endDate: Date): number => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  return Math.round(Math.abs((endDate.getTime() - startDate.getTime()) / oneDay));
};
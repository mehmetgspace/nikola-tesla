/**
 * Truncates the given text to a specified length and appends a suffix.
 *
 * @param {string} text - The text to be truncated.
 * @param {number} length - The maximum length of the truncated text, not including the suffix.
 * @param {string} [suffix='...'] - The suffix to be appended to the truncated text. Defaults to '...'.
 * @returns {string} The truncated text with the suffix appended.
 */
export const truncateString = (text: string, length: number, suffix: string = '...'): string => {
  if (text.length <= length) {
    return text;
  } else {
    return text.substring(0, length) + suffix;
  }
}
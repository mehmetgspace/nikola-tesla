/**
 * Finds and replaces all instances of a search string within a given text with a replacement string.
 *
 * @param {string} text - The text to search and replace within.
 * @param {string} search - The string to search for within the text.
 * @param {string} replacement - The string to replace the search string with whenever it is found.
 * @returns {string} The text with all instances of the search string replaced by the replacement string.
 */
export const findAndReplace = (text: string, search: string, replacement: string): string => {
  return text.replace(new RegExp(search, 'g'), replacement);
}
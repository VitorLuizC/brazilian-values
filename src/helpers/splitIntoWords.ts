/**
 * Splits text into words.
 * @param text - A `string` to be splitted into words.
 */
const splitIntoWords = (
  text: string,
): string[] => text ? text.split(/\s+/) : [];

export default splitIntoWords;

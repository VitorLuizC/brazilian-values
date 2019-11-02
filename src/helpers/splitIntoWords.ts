import normalizeWhiteSpaces from './normalizeWhiteSpaces';

/**
 * Normalizes text white spaces, then splits into words.
 * @param value - A `string` (text) to be splitted into words.
 */
const splitIntoWords = (
  value: string,
): string[] => {
  const text = normalizeWhiteSpaces(value);
  return text ? text.split(' ') : [];
};

export default splitIntoWords;

/**
 * Normalize white spaces in a `string` (value).
 * @param value - A `string` to be normalized.
 */
const normalizeWhiteSpaces = (
  value: string,
): string => value.trim().replace(/\s+/g, ' ');

export default normalizeWhiteSpaces;

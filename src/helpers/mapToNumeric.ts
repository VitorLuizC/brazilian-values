/**
 * Matches every non-numeric characters.
 */
const NonNumeric = /\D/g;

/**
 * Maps to a text containing only numeric characters.
 * @param value - A text containing numbers.
 */
const mapToNumeric = (
  value: string,
): string => value.replace(NonNumeric, '');

export default mapToNumeric;

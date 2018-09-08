/**
 * Brazilian date pattern.
 */
const pattern = /^\d{2}\/\d{2}\/\d{4}$/;

/**
 * Check if value matches brazilian date pattern.
 * @param value
 */
const isDatePattern = (
  value: string,
): boolean => pattern.test(value);

export default isDatePattern;

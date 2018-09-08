/**
 * Brazilian date pattern.
 */
const pattern = /^\d{2}\/\d{2}\/\d{4}$/;

/**
 * Check if value matches brazilian date pattern.
 * @example ```js
 * isDatePattern('28/03/2017')
 * //=> true
 *
 * isDatePattern('31/13/2017')
 * //=> true
 *
 * isDatePattern('28-03-2017')
 * //=> false
 *
 * isDatePattern('28/03/18')
 * //=> false
 * ```
 * @param value
 */
const isDatePattern = (
  value: string,
): boolean => pattern.test(value);

export default isDatePattern;

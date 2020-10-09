import comparePiecesToDate from '../helpers/comparePiecesToDate';
import mapToPieces from '../helpers/mapToPieces';

/**
 * Pattern to match brazilian formatted dates (99/99/9999).
 */
const DATE_PATTERN = /^\d{2}\/\d{2}\/\d{4}((\s)?(\d{2}:\d{2}:\d{2}))?$/;

/**
 * Check if a brazilian formatted date is valid.
 * @example ```js
 * isDate('03/08/2017')
 * //=> true
 *
 * isDate('28/13/2017')
 * //=> false
 *
 * isDate('03-08-2017')
 * //=> false
 *
 * isDate('31/03/18')
 * //=> false
 * ```
 * @param value - A date in DD/MM/YYYY.
 */
const isDate = (
  value: string,
): boolean => DATE_PATTERN.test(value) && comparePiecesToDate(mapToPieces(value));

export default isDate;

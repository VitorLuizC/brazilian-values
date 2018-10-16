import comparePiecesToDate from '../helpers/comparePiecesToDate';
import isDatePattern from '../helpers/isDatePattern';
import mapToPieces from '../helpers/mapToPieces';

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
): boolean => isDatePattern(value) && comparePiecesToDate(mapToPieces(value));

export default isDate;

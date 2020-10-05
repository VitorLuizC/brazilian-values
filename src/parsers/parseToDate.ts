import comparePiecesToDate from '../helpers/comparePiecesToDate';
import mapToPieces from '../helpers/mapToPieces';
import parsePiecesToDate from '../helpers/parsePiecesToDate';

/**
 * Pattern to match brazilian formatted datetimes (99/99/9999 99:99:99), where the time field is optional
 */
const DATE_PATTERN = /^\d{2}\/\d{2}\/\d{4}((\s)?(\d{2}:\d{2}:\d{2}))?$/;

/**
 * Parses a brazilian formatted date into a Date instance.
 * @example ```js
 * parseToDate('28/03/1996')
 * //=> '1996-03-28T03:00:00.000Z'
 *
 * parseToDate('31/02/2018')
 * //=> throws Error('Value "31/02/2018" is an invalid date.')
 * ```
 * @param value - A date in DD/MM/YYYY.
 */
const parseToDate = (
  value: string,
): Date => {
  if (!DATE_PATTERN.test(value))
    throw new Error(`Value "${value}" does not match format.`);
  const pieces = mapToPieces(value);
  const instance = parsePiecesToDate(pieces);
  if (!comparePiecesToDate(pieces, instance))
    throw new Error(`Value "${value}" is an invalid date.`);
  return instance;
};

export default parseToDate;

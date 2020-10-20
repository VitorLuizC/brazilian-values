import comparePiecesToDate from '../helpers/comparePiecesToDate';
import mapToPieces from '../helpers/mapToPieces';
import parsePiecesToDate from '../helpers/parsePiecesToDate';

/**
 * A `RegExp` that matches common brazilian date and, optionally, time formats.
 *
 * In date and time the seconds are optional too. So the valid formats are:
 * "DD/MM/YYYY", "DD/MM/YYYY HH:mm" and "DD/MM/YYYY HH:mm:ss".
 */
const DATE_TIME_PATTERN = /^\d{2}\/\d{2}\/\d{4}( \d{2}:\d{2}(:\d{2})?)?$/;

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
  if (!DATE_TIME_PATTERN.test(value))
    throw new Error(`Value "${value}" does not match format.`);
  const pieces = mapToPieces(value);
  const instance = parsePiecesToDate(pieces);
  if (!comparePiecesToDate(pieces, instance))
    throw new Error(`Value "${value}" is an invalid date.`);
  return instance;
};

export default parseToDate;

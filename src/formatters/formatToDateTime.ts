import formatToDate from './formatToDate';
import fillWithZeros from '../helpers/fillWithZeros';

/**
 * Formats a Date instance to brazilian format of date and time, DD/MM/YYYY HH:mm.
 * @example ```js
 * formatToDateTime(new Date(2002, 7, 21, 18, 30))
 * //=> '21/08/2002 18:30'
 * ```
 * @param value - A Date instance.
 */
const formatToDateTime = (
  value: Date,
): string => (
  formatToDate(value) + ' ' +
  fillWithZeros(value.getHours(), 2) + ':' +
  fillWithZeros(value.getMinutes(), 2)
);

export default formatToDateTime;

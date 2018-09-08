import fillWithZeros from '../helpers/fillWithZeros';

/**
 * Formats a Date instance to brazilian format, DD/MM/YYYY.
 * @example ```js
 * formatToDate(new Date(2002, 7, 21))
 * //=> '21/08/2002'
 *
 * formatToDate(new Date())
 * //=> '08/09/2018'
 * ```
 * @param value - A Date instance.
 */
const formatToDate = (
  value: Date,
): string => (
  fillWithZeros(value.getDate(), 2) + '/' +
  fillWithZeros(value.getMonth() + 1, 2) + '/' +
  fillWithZeros(value.getFullYear(), 4)
);

export default formatToDate;

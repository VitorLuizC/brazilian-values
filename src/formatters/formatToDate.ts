import fillWithZeros from '../helpers/fillWithZeros';

/**
 * Formats a Date instance to brazilian format, DD/MM/YYYY.
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

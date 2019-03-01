import addPeriods from '../helpers/addPeriods';

/**
 * Formats a number to brazilian formatted number.
 * @example
 * formatToNumber(0)
 * //=> 0
 * formatToNumber(-1299)
 * //=> -1.299
 * formatToNumber(.981)
 * //=> 0.981
 * formatToNumber('19898.1298')
 * //=> 19.898,1298
 * @param value - Number value to be formatted.
 */
const formatToNumber = (
  value: number | string,
): string => {
  const [ number, trunc ] = Number(value).toString(10).split('.');
  if (!trunc)
    return addPeriods(number);
  return addPeriods(number) + ',' + trunc;
};

export default formatToNumber;

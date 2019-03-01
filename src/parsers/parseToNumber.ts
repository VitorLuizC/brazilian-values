/**
 * Parses brazilian formatted number to number.
 * @example
 * parseToNumber('10')
 * //=> 10
 * parseToNumber('-1.299')
 * //=> -1299
 * parseToNumber('0,981')
 * //=> 0.981
 * parseToNumber('19.898,1298')
 * //=> 19898.1298
 * @param value - A brazilian formatted number.
 */
const parseToNumber = (
  value: string,
): number => Number(value.replace(/\./g, '').replace(',', '.'));

export default parseToNumber;

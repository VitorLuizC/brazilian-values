/**
 * Formats a number into money (BRL) format.
 * @example ```js
 * BRL.format(1928.93)
 * //=> 'R$ 1.928,93'
 * BRL.format(9211928.18203)
 * //=> 'R$ 9.211.928,18'
 * ```
 * @param value BRL value.
 */
const formatToBRL = (
  value: number | string,
): string => 'R$ ' + (
  Number(value)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
);

export default formatToBRL;

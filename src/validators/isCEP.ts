import mapToNumeric from '../helpers/mapToNumeric';

/**
 * Check if value is a valid CEP.
 * @example ```js
 * isCEP('02998-050')
 * //=> true
 *
 * isCEP('00000000')
 * //=> true
 *
 * isCEP('0')
 * //=> false
 *
 * isCEP('1982891928981982198')
 * //=> false
 * ```
 * @param value - A text containing a CEP.
 */
const isCEP = (
  value: string,
): boolean => {
  const numbers = mapToNumeric(value);
  return (numbers.length === 8);
};

export default isCEP;

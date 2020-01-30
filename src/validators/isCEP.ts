/**
 * Pattern to match formatted CEP (99999-999) or 8 numbers.
 */
const CEP_PATTERN = /^(\d{8}|\d{2}\.?\d{3}\-\d{3})$/;

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
): boolean => CEP_PATTERN.test(value);

export default isCEP;

/**
 * Brazilian CPF pattern.
 */
const CPF_VALID_PATTERN = /^(\d{11}|\d{3}\.\d{3}\.\d{3}\-\d{2})$/;

/**
 * Check if value matches brazilian CNPJ pattern.
 * @example ```js
 * isCPFPattern('366.418.768-70')
 * //=> true
 *
 * isCPFPattern('36641876870')
 * //=> true
 *
 * isCPFPattern('2##.3A8.0AS-AS')
 * //=> false
 *
 * isCPFPattern('21312872')
 * //=> false
 * ```
 * @param value - A text containing a CPF.
 */
const isCPFPattern = (
  value: string,
): boolean => CPF_VALID_PATTERN.test(value);

export default isCPFPattern;

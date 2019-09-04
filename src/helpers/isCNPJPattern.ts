/**
 * Brazilian CNPJ pattern.
 */
const CNPJ_VALID_PATTERN = /^(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2})$/;

/**
 * Check if value matches brazilian CNPJ pattern.
 * @example ```js
 * isCNPJPattern('41142260000189')
 * //=> true
 *
 * isCNPJPattern('11.111.111/1111-11')
 * //=> true
 *
 * isCNPJPattern('411407182')
 * //=> false
 *
 * isCNPJPattern('2S.28A.10E/00JS-##')
 * //=> false
 * ```
 * @param value - A text containing a CNPJ.
 */
const isCNPJPattern = (
  value: string,
): boolean => CNPJ_VALID_PATTERN.test(value);

export default isCNPJPattern;

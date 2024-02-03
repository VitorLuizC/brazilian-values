import mapToNumeric from '../helpers/mapToNumeric';

/**
 * Formats a phone value into brazilian common phone formats.
 * @example ```js
 * formatToPhone('11')
 * //=> '(11'
 *
 * formatToPhone('11971626')
 * //=> '(11) 9716-26'
 *
 * formatToPhone('11971626799')
 * //=> '(11) 97162-6799'
 * ```
 * @param value
 */
const formatToPhone = (
  value: string,
): string => (
  mapToNumeric(value)
    .replace(/(\d{1,2})/, '($1')
    .replace(/(\(\d{2})(\d{1,4})/, '$1) $2')
    .replace(/( \d{4})(\d{1,4})/, '$1-$2')
    .replace(/( \d{4})(?:-)(\d{1})(\d{4})/, '$1$2-$3')
);

export default formatToPhone;

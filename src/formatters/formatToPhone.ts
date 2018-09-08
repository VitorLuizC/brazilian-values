import mapToNumeric from '../helpers/mapToNumeric';

/**
 * Formats a phone value into brazilian common phone formats.
 * @example ```js
 * Phone.format('1982891031')
 * //=> '(19) 8289-1031'
 * Phone.format('11988563629')
 * //=> '(11) 9 8856-3629'
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
    .replace(/( \d{1})(\d{3})(?:-)(\d{1})(\d{4})/, '$1 $2$3-$4')
);

export default formatToPhone;

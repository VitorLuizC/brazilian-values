import mapToNumeric from '../helpers/mapToNumeric';

/**
 * Formats step-by-step a `string` value into a CAEPF.
 * @example ```js
 * formatToCAEPF('1234567')
 * //=> '123.456.7'
 *
 * formatToCAEPF('12345678900199')
 * //=> '123.456.789/001-99'
 *
 * formatToCAEPF('00.000.0.0--0-0000.00')
 * //=> '000.000.000/000-00'
 * 
 * formatToCAEPF('123.456.789/001-99')
 * //=> '123.456.789/001-99'
 * ```
 * @param value - A `string` value of a CAEPF.
 */
const formatToCAEPF = (
  value: string,
): string => (
  mapToNumeric(value)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
);

export default formatToCAEPF;

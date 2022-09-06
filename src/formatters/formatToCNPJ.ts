import mapToNumeric from '../helpers/mapToNumeric';

/**
 * Formats step-by-step a `string` value into a CNPJ.
 * @example ```js
 * formatToCNPJ('128781')
 * //=> '12.878.1'
 *
 * formatToCNPJ('32284981000138')
 * //=> '32.284.981/0001-38'
 *
 * formatToCNPJ('00.0.000.00.00--00-00')
 * //=> '00.000.000/0000-00'
 * ```
 * @param value - A `string` value of a CNPJ.
 */
const formatToCNPJ = (
  value: string,
): string => (
  mapToNumeric(value)
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})$/, '$1-$2')
);

export default formatToCNPJ;

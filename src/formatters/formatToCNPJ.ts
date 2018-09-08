import mapToNumeric from '../helpers/mapToNumeric';

/**
 * Formats step-by-step a `string` value into a CPF.
 * @example ```js
 * CNPJ.format('78531861000193')
 * //=> '78.531.861/0001-93'
 * CNPJ.format('3228498100')
 * //=> '32.284.981/00'
 * CNPJ.format('Abacate')
 * //=> ''
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

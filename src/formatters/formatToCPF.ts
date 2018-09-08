import mapToNumeric from '../helpers/mapToNumeric';

/**
 * Formats step-by-step a `string` value into a CPF.
 * @example ```js
 * formatToCPF('00000000')
 * //=> '000.000.00'
 *
 * formatToCPF('00000000000')
 * //=> '000.000.000-00'
 *
 * formatToCPF('366.418.768-70')
 * //=> '366.418.768-70'
 * ```
 * @param value - A `string` value of a CPF.
 */
const formatToCPF = (
  value: string,
): string => (
  mapToNumeric(value)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
);

export default formatToCPF;

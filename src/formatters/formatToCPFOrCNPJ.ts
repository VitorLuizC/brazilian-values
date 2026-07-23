import formatToCNPJ from './formatToCNPJ';
import formatToCPF from './formatToCPF';

/**
 * Check if a `string` value can be formatted to CPF (digits-only, max 11; else CNPJ).
 * @param value - A `string` value of a CPF or CNPJ.
 */
const canFormatToCPF = (
  value: string,
): boolean =>
  (value.replace(/\D/g, '').length <= 11) && !/[/A-Za-z]/.test(value)

/**
 * Formats step-by-step a `string` value to CPF or CNPJ depending on its length.
 * @example
 * formatToCPFOrCNPJ('00000000')
 * //=> '000.000.00'
 *
 * formatToCPFOrCNPJ('366.418.768-70')
 * //=> '366.418.768-70'
 *
 * formatToCPFOrCNPJ('32284981000138')
 * //=> '32.284.981/0001-38'
 *
 * formatToCPFOrCNPJ('00.0.000.00.00--00-00')
 * //=> '00.000.000/0000-00'
 * @param value - A `string` value of a CPF or CNPJ.
 */
const formatToCPFOrCNPJ = (
  value: string,
): string => canFormatToCPF(value) ? formatToCPF(value) : formatToCNPJ(value);

export default formatToCPFOrCNPJ;

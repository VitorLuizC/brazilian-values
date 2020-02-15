import formatToCNPJ from './formatToCNPJ';
import formatToCPF from './formatToCPF';

/**
 * Check if a `string` value can be formatted to CPF.
 * @param value - A `string` value of a CPF or CNPJ.
 */
const canFormatToCPF = (
  value: string,
): boolean => (value.match(/\d/g)?.length ?? 0) <= 11

/**
 * Formats step-by-step a `string` value to CPF or CNPJ depending on its length.
 * @example
 * formatToCPFOrCNPJ('00000000000')
 * //=> '000.000.000-00'
 *
 * formatToCPFOrCNPJ('36641876870')
 * //=> '366.418.768-70'
 * @param value - A `string` value of a CPF or CNPJ.
 */
const formatToCPFOrCNPJ = (
  value: string,
): string => canFormatToCPF(value) ? formatToCPF(value) : formatToCNPJ(value);

export default formatToCPFOrCNPJ;

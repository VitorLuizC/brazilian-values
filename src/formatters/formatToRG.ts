/**
 * Progressively formats a `string` into a RG.
 * @example ```js
 * formatToRG('00000000A', 'SP')
 * //=> '00.000.000-A'
 *
 * formatToRG('00.00.0000-0', 'RJ')
 * //=> '00.000.000-0'
 *
 * formatToRG('MG-14.808.688', 'MG')
 * //=> 'MG-14.808.688'
 * ```
 * @param value - A `string` representing an RG.
 * @param state - Brazilian state which defines RG format.
 */
const formatToRG = (
  value: string,
  state?: string,
): string => (state !== 'RJ' && state !== 'SP') ? value : (
  value
    .toUpperCase()
    .replace(/[^\d|A|B|X]/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})([\d|A|B|X]{1})$/, '$1-$2')
);

export default formatToRG;

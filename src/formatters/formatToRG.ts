/**
 * Progressively formats a `string` into a RG.
 * @example ```js
 * RG.format('234897231', 'SP')
 * //=> '23.489.723-1'
 * RG.format('50833198x', 'RJ')
 * //=> '50.833.198-X'
 * RG.format('MG-128.140')
 * //=> 'MG-128.140'
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

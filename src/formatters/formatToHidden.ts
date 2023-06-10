/**
 * Options for `formatToHidden` function.
 */
type Options = {
  range?: number;
  hider?: string;
};

/**
 * Formats an value to hidden some digits.
 * @example ```js
 * formatToHidden('123.456.789-12')
 * //=> '***.456.789-12'
 *
 * formatToHidden('123.456.789-12', {range: 6})
 * //=> '***.***.789-12'
 *
 * formatToHidden('(55) 9 8480-0000', {range: 6, hider: 'x'})
 * //=> '(xx) x xxx0-0000'
 * ```
 * @param value - A `string` formated or unformated value.
 * @param {range: number, hider: string} - Optional. Options props.
 * @param range - Optional. The `number` of range of hider changes. Default = 3.
 * @param hider - Optional. The char that will hide numbers. Default = '*'
 */
const formatToHidden = (
  value: string,
  { range = 3, hider = "*" }: Options = {}
) => {
  const valueArray = value.split("");
  let countNaN = 0;
  for (let i = 0; i < range + countNaN; i++) {
    isNaN(parseInt(valueArray[i])) ? countNaN++ : (valueArray[i] = hider);
  }
  return valueArray.join("");
};

export default formatToHidden;

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
  options: FormatToHiddenOptions = {},
): string => {
  const characters = parseToCharacters(value);
  const range = normalizeRange(options.range ?? 3, characters.digits);
  return characters.children
    .map((node) => {
      if (node.kind === "digit" && within(range, node.digit))
        return options.hider ?? "*";
      return node.character;
    })
    .join("");
};

export default formatToHidden;

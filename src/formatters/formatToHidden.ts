import { Range, normalizeRange, within } from "../models/Range";
import parseToCharacters from "../parsers/parseToCharacters";

/** Options object for {@link formatToHidden} function. */
export type FormatToHiddenOptions = {
  /**
   * The range of digits replaced by {@link FormatToHiddenOptions.hider}
   * character. It can be both a tuple of numbers or a single number.
   *
   * @example ```js
   * formatToHidden("00.000-00", { range: 2 });
   * //=> "**.000-00"
   *
   * formatToHidden("00.000-00", { range: -2 });
   * //=> "00.000-**"
   *
   * formatToHidden("00.000-00", { range: [1, 4] });
   * //=> "0*.***-00"
   * ```
   *
   * @default 3
   */
  range?: number|[number,number];

  /**
   * The character used as replacement for digits in within
   * {@link FormatToHiddenOptions.range}.
   *
   * @example ```js
   * formatToHidden("00.000-00", { hider: "-" });
   * //=> "--.-00-00"
   *
   * formatToHidden("00.000-00", { hider: " " });
   * //=> "  . 00-00"
   *
   * formatToHidden("00.000-00", { hider: "#" });
   * //=> "##.#00-00"
   * ```js
   *
   * @default "*"
   */
  hider?: string;
};

/**
 * Formats a `string` value with digits by replacing the digits within the
 * range using the hider character as replacement.
 *
 * @example ```js
 * formatToHidden('00.000-000')
 * //=> '**.*00-000'
 *
 * formatToHidden('03/04/2002', { hider: '-' })
 * //=> '--/-4/2002'
 *
 * formatToHidden('111.111.111-11', { range: [4, 9] })
 * //=> '111.***.***-11'
 *
 * formatToHidden('12.345.678-9', { hider: '#', range: 5 })
 * //=> '##.###.678-9'
 *
 * formatToHidden('52.715.348/0001-69', { hider: '@', range: -9 })
 * //=> '52.715.@@@/@@@@-@@'
 * ```
 *
 * @param value - A `string` with digits, with or without a mask.
 * @param options - The options object.
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

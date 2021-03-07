/**
 * Any number above it is displayed in scientific notation.
 */
const MAX_NUMBER_NOT_DISPLAYED_IN_SCIENTIFIC_NOTATION = 999_999_999_999_999_934_463;

/**
 * Any number below it is displayed in scientific notation.
 */
const MIN_NUMBER_NOT_DISPLAYED_IN_SCIENTIFIC_NOTATION = -MAX_NUMBER_NOT_DISPLAYED_IN_SCIENTIFIC_NOTATION;

/**
 * Checks if the received value is displayed in scientific notation.
 * @example
 * isDisplayedInScientificNotation(1e21);
 * //=> false
 *
 * isDisplayedInScientificNotation(-999999999999999999999);
 * //=> false
 *
 * isDisplayedInScientificNotation(4319);
 * //=> true
 * @param {number} value
 * @returns {boolean}
 */
function isDisplayedInScientificNotation(value: number): boolean {
  return (
    value < MIN_NUMBER_NOT_DISPLAYED_IN_SCIENTIFIC_NOTATION ||
    value > MAX_NUMBER_NOT_DISPLAYED_IN_SCIENTIFIC_NOTATION
  );
}

export default isDisplayedInScientificNotation;

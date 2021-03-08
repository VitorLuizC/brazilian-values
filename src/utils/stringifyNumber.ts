import isDisplayedInScientificNotation from './isDisplayedInScientificNotation.js';

/**
 * Stringifies received value as `number`.
 * @param {number | string | bigint} value
 * @returns {string}
 */
function stringifyNumber(value: string | number | bigint): string {
  if (typeof value !== 'number' && typeof value !== 'bigint')
    return stringifyNumber(parseFloat(value));

  if (typeof value === 'number' && isNaN(value))
    throw new Error("Can't stringify NaN.");

  if (typeof value === 'number' && !isFinite(value))
    throw new Error("Can't stringify Infinity or -Infinity.");

  if (typeof value === 'number' && isDisplayedInScientificNotation(value))
    throw new Error("Can't stringify number displayed in scientific notation.");

  return value.toString(10);
}

export default stringifyNumber;

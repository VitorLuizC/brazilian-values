/**
 * A RegExp that matches groups of three digits.
 */
const NUMBER_PERIODS = /(\d)(?=(\d{3})+(?!\d))/g;

/**
 * Adds thousand separators (periods) to the received stringified number.
 * @param {string} number - An stringified number.
 * @returns {string}
 */
function addThousandSeparators(number: string) {
  return number.replace(NUMBER_PERIODS, '$1.');
}

export default addThousandSeparators;

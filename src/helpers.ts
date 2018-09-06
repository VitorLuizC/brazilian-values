/**
 * A `RegExp` to match numbers.
 */
const numbers = /[0-9]/g;

/**
 * Map a text value to a collection of it's numbers.
 * @param value - Text containing numbers.
 */
export const mapToNumbers = (
  value: string,
): Array<number> => value.match(numbers).map(Number);

/**
 * Check if items are same, if their values are repeated.
 * @param items - An array.
 */
export const isRepeatedArray = <T> (
  items: Array<T>,
): boolean => items.every(item => item === items[0]);

/**
 * Checkers used to validate a document or something with numbers.
 */
type Checkers = [ number, number ];

/**
 * Generate checkers. Multiply numbers to validators and generates 2 checkers,
 * they're used to check if numbers are valid.
 * @param numbers - Numbers used to generate checkers.
 * @param validators - Validators used to generate checkers.
 */
export const generateCheckers = (
  numbers: Array<number>,
  validators: Array<number>,
): Checkers => {
  const initialCheckers: Checkers = [ 0, 0 ];

  return validators.reduce(([ checkerA, checkerB ], validator, index) => [
    (index === 0) ? 0 : (checkerA + numbers[index - 1] * validator),
    checkerB + numbers[index] * validator
  ], initialCheckers) as Checkers;
};

/**
 * Get remaining of divider or `0` if lower than minimum.
 * @param value - Value used remaining.
 * @param divider - Remaining's divider.
 * @param minimum - Minimum remaining value.
 */
export const getRemaining = (
  value: number,
  divider: number,
  lowerValue: number,
): number => (value % divider) < lowerValue ? 0 : divider - (value % divider);

/**
 * Fills a number with zeros.
 * @param value - A number value.
 * @param length - Number of characters to be filled with zeros.
 */
export const fillWithZeros = (
  value: number,
  length: number,
): string => {
  let string = value.toString(10);
  while (string.length < length)
    string = '0' + string;
  return string;
};

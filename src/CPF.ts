import { generateCheckers, getRemaining, mapToNumbers } from './helpers';

/**
 * Check if value is a valid CPF.
 * @example ```js
 * CPF.validate('676.711.521-53')
 * //=> true
 * CPF.validate('472.239.983-76')
 * //=> false
 * ```
 * @param value - A string containing a CPF.
 */
export const validate = (
  value: string,
): boolean => {
  const numbers = mapToNumbers(value);
  if (numbers.length !== 11)
    return false;
  const validators = [ 11, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];
  const checkers = generateCheckers(numbers, validators);
  return (
    numbers[12] === getRemaining(checkers[0], 11, 2) &&
    numbers[13] === getRemaining(checkers[1], 11, 2)
  );
};

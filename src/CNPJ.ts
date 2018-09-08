import generateCheckSums from './helpers/generateCheckSums';
import getRemaining from './helpers/getRemainig';
import isRepeatedArray from './helpers/isRepeatedValue';
import mapToNumbers from './helpers/mapToNumbers';

/**
 * Check if value is a valid CNPJ.
 * @example ```js
 * CNPJ.validate('78.531.861/0001-93')
 * //=> true
 * CNPJ.validate('32.284.981/0001-44')
 * //=> false
 * ```
 * @param value - A string containing a CNPJ.
 */
export const validate = (
  value: string,
): boolean => {
  const numbers = mapToNumbers(value);
  if (numbers.length !== 14 || isRepeatedArray(numbers))
    return false;
  const validators = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ];
  const checkers = generateCheckSums(numbers, validators);
  return (
    numbers[12] === getRemaining(checkers[0]) &&
    numbers[13] === getRemaining(checkers[1])
  );
};

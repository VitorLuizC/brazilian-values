import generateCheckSums from '../helpers/generateCheckSums';
import getRemaining from '../helpers/getRemainig';
import isRepeatedArray from '../helpers/isRepeatedValue';
import mapToNumbers from '../helpers/mapToNumbers';

/**
 * Pattern to match formatted CPF (999.999.999-99) or 11 numbers.
 */
export const CPF_PATTERN = /^(\d{11}|\d{3}\.\d{3}\.\d{3}\-\d{2})$/;

/**
 * Check if value is a valid CPF.
 * @example ```js
 * isCPF('366.418.768-70')
 * //=> true
 *
 * isCPF('36641876870')
 * //=> true
 *
 * isCPF('213.198.013-20')
 * //=> false
 *
 * isCPF('2131201872781')
 * //=> false
 *
 * isCPF('11111111111')
 * //=> false
 * ```
 * @param value - A text containing a CPF.
 */
const isCPF = (
  value: string,
): boolean => {
  if (!CPF_PATTERN.test(value))
    return false;
  const numbers = mapToNumbers(value);
  if (isRepeatedArray(numbers))
    return false;
  const validators = [ 11, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];
  const checkers = generateCheckSums(numbers, validators);
  return (
    numbers[9] === getRemaining(checkers[0]) &&
    numbers[10] === getRemaining(checkers[1])
  );
};

export default isCPF;

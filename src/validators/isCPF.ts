import generateCheckSums from '../helpers/generateCheckSums';
import getRemaining from '../helpers/getRemainig';
import isRepeatedArray from '../helpers/isRepeatedValue';
import mapToNumbers from '../helpers/mapToNumbers';

/**
 * Check if value is a valid CPF.
 * @example ```js
 * CPF.validate('676.711.521-53')
 * //=> true
 * CPF.validate('472.239.983-76')
 * //=> false
 * ```
 * @param value - A text containing a CPF.
 */
const isCPF = (
  value: string,
): boolean => {
  const numbers = mapToNumbers(value);
  if (numbers.length !== 11 || isRepeatedArray(numbers))
    return false;
  const validators = [ 11, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];
  const checkers = generateCheckSums(numbers, validators);
  return (
    numbers[12] === getRemaining(checkers[0]) &&
    numbers[13] === getRemaining(checkers[1])
  );
};

export default isCPF;

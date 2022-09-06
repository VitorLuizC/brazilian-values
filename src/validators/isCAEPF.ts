import generateCAEPFCheckSums from '../helpers/generateCAEPFCheckSums';
import getRemaining from '../helpers/getRemaining';
import isRepeatedArray from '../helpers/isRepeatedValue';
import mapToNumbers from '../helpers/mapToNumbers';

/**
 * Pattern to match formatted CAEPF (999.999.999/999-99) or 14 numbers.
 */
export const CAEPF_PATTERN = /^(\d{14}|\d{3}\.\d{3}\.\d{3}\/\d{3}\-\d{2})$/;

/**
 * Check if value is a valid CAEPF.
 * @example ```js
 * isCAEPF('41142260000101')
 * //=> true
 * 
 * isCAEPF('411.422.600/001-01')
 * //=> true
 *
 * isCAEPF('111.111.111/111-11')
 * //=> false
 *
 * isCAEPF('411407182')
 * //=> false
 *
 * ```
 * @param value - A text containing a CAEPF.
 */
const isCAEPF = (
  value: string,
): boolean => {
  if (!CAEPF_PATTERN.test(value))
    return false;
  const numbers = mapToNumbers(value);
  if (isRepeatedArray(numbers))
    return false;
  const validators = [ 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9 ];
  const checkers = generateCAEPFCheckSums(numbers, validators);
  return (
    numbers[12] === checkers[0] &&
    numbers[13] === checkers[1]
  );
};

export default isCAEPF;

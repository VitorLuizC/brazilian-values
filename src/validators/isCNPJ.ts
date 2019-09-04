import generateCheckSums from '../helpers/generateCheckSums';
import getRemaining from '../helpers/getRemainig';
import isCNPJPattern from '../helpers/isCNPJPattern';
import isRepeatedArray from '../helpers/isRepeatedValue';
import mapToNumbers from '../helpers/mapToNumbers';

/**
 * Check if value is a valid CNPJ.
 * @example ```js
 * isCNPJ('41142260000189')
 * //=> true
 *
 * isCNPJ('45.723.174/0001-10')
 * //=> true
 *
 * isCNPJ('411407182')
 * //=> false
 *
 * isCNPJ('11.111.111/1111-11')
 * //=> false
 * ```
 * @param value - A text containing a CNPJ.
 */
const isCNPJ = (
  value: string,
): boolean => {
  if (!isCNPJPattern(value))
    return false;
  const numbers = mapToNumbers(value);
  if (isRepeatedArray(numbers))
    return false;
  const validators = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ];
  const checkers = generateCheckSums(numbers, validators);
  return (
    numbers[12] === getRemaining(checkers[0]) &&
    numbers[13] === getRemaining(checkers[1])
  );
};

export default isCNPJ;

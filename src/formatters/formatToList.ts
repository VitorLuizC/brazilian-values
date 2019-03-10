import splitOnLast from '../helpers/splitOnLast';

/**
 * Formats an Array into brazilian formatted list.
 * @example
 * formatToList(['Vitor', 'William', 'Fernando'])
 * //=> 'Vitor, William e Fernando'
 *
 * formatToList([])
 * // => ''
 *
 * formatToList(['1', '2'])
 * // => '1 e 2'
 *
 * formatToList(['Direito Civil'])
 * //=> 'Direito Civil'
 * @param value - An array of string values.
 */
const formatToList = (
  value: string[],
): string => {
  if (value.length === 0)
    return '';
  if (value.length === 1)
    return value[0];
  const [everyButLast, last] = splitOnLast(value);
  return everyButLast.join(', ') + ' e ' + last;
};

export default formatToList;

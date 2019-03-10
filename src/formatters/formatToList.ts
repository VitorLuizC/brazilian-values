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
  let str = "";
  let arrSize = value.length;

  value.map((item, i) => {
    if (i === 0) {
      return (str += `${item}`);
    } else if (i + 1 === arrSize) {
      return (str += ` e ${item}`);
    }
    return (str += `, ${item}`);
  });

  return str;
};

export default formatToList;

/**
 * Parses a brazilian formatted list into an Array.
 * @example
 * parseToArray('');
 * //=> []
 * parseToArray('1');
 * //=> ['1']
 * parseToArray('1 e 2');
 * //=> ['1', '2']
 * parseToArray('1, 2, 3, 4 e 5');
 * //=> ['1', '2', '3', '4', '5']
 * parseToArray('Fernanda, Luana e Ana Carolina');
 * //=> ['Fernanda', 'Luana', 'Ana Carolina']
 * @param value - A brazilian formatted list.
 */
const parseToArray = (
  value: string,
): string[] => {
  if (!value.trim())
    return [];
  const items = value.split(' e ');
  if (items.length === 1)
    return items;
  return items[0].split(', ').concat(items[1]);
};

export default parseToArray;

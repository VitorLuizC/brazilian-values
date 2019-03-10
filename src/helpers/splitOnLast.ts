/**
 * Split `Array` elements into every but last and last element.
 * @param value - An Array with at least one item.
 */
const splitOnLast = <T>(
  value: T[],
): [T[], T] => [
  value.slice(0, value.length - 1),
  value[value.length - 1],
];

export default splitOnLast;

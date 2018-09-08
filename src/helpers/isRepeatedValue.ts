/**
 * Check if items are same, if their values are repeated.
 * @param item
 */
const isRepeatedArray = <T>(
  items: Array<T>,
): boolean => items.every((item) => items[0] === item);

export default isRepeatedArray;

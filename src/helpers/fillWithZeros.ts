/**
 * Fills a number with zeros.
 * @param value - A number value.
 * @param length - Number of characters to be filled with zeros.
 */
const fillWithZeros = (
  value: number,
  length: number,
): string => {
  let numbers = value.toString(10);
  while (numbers.length < length)
    numbers = '0' + numbers;
  return numbers;
};

export default fillWithZeros;

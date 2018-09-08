import mapToNumeric from './mapToNumeric';

/**
 * Maps a text to a collection of it's numbers.
 * @param value - A text containing numbers.
 */
const mapToNumbers = (
  value: string,
): Array<number> => mapToNumeric(value).split('').map(Number);

export default mapToNumbers;

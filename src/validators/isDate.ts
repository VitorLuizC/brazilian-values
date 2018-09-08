import comparePiecesToDate from '../helpers/comparePiecesToDate';
import isDatePattern from './isDatePattern';
import mapToPieces from '../helpers/mapToPieces';

/**
 * Check if a brazilian formatted date is valid.
 * @param value - A date in DD/MM/YYYY.
 */
const isDate = (
  value: string,
): boolean => isDatePattern(value) && comparePiecesToDate(mapToPieces(value));

export default isDate;

import comparePiecesToDate from '../helpers/comparePiecesToDate';
import mapToPieces from '../helpers/mapToPieces';
import parsePiecesToDate from '../helpers/parsePiecesToDate';
import isDatePattern from '../validators/isDatePattern';

/**
 * Parses a brazilian formatted date into a Date instance.
 * @param value - A date in DD/MM/YYYY.
 */
const parseToDate = (
  value: string,
): Date => {
  if (!isDatePattern(value))
    throw new Error(`Value "${value}" does not match format.`);
  const pieces = mapToPieces(value);
  const instance = parsePiecesToDate(pieces);
  if (!comparePiecesToDate(pieces, instance))
    throw new Error(`Value "${value}" is an invalid date.`);
  return instance;
};

export default parseToDate;

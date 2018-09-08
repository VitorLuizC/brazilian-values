import fillWithZeros from './helpers/fillWithZeros';

/**
 * Pieces of a date (date, month and year).
 */
type DatePieces = {
  date: number;
  year: number;
  month: number;
};

const expression = /^(\d{2})\/(\d{2})\/(\d{4})$/;

/**
 * Resolve a brazilian formatted date into date, month and year pieces.
 * @param value - A date in DD/MM/YYYY.
 */
const resolveToPieces = (
  value: string,
): DatePieces => {
  const [ , DD, MM, YYYY ] = expression.exec(value);
  return {
    date: parseInt(DD, 10),
    year: parseInt(YYYY, 10),
    month: parseInt(MM, 10) - 1,
  };
};

/**
 * Transforms pieces of a date into a Date instance.
 */
const parsePiecesToDate = (
  pieces: DatePieces,
): Date => new Date(pieces.year, pieces.month, pieces.date);

/**
 * Compare pieces of a date to values obtained from a Date instance.
 * @param pieces - Pieces of a date (date, month and year).
 * @param instance - A Date instance.
 */
const comparePiecesToDate = (
  pieces: DatePieces,
  instance: Date = parsePiecesToDate(pieces),
): boolean => (
  instance.getDate() === pieces.date &&
  instance.getMonth() === pieces.month &&
  instance.getFullYear() === pieces.year
);

/**
 * Check if a brazilian formatted date is valid.
 * @param value - A date in DD/MM/YYYY.
 */
export const validate = (
  value: string,
): boolean => {
  if (!expression.test(value))
    return false;
  return comparePiecesToDate(resolveToPieces(value));
};

/**
 * Parses a brazilian formatted date into a Date instance.
 * @param value - A date in DD/MM/YYYY.
 */
export const parse = (
  value: string,
): Date => {
  if (!expression.test(value))
    throw new Error(`Value "${value}" does not match format.`);
  const pieces = resolveToPieces(value);
  const instance = parsePiecesToDate(pieces);
  if (!comparePiecesToDate(pieces, instance))
    throw new Error(`Value "${value}" is an invalid date.`);
  return instance;
};

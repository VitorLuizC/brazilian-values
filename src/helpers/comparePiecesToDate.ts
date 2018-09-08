import DatePieces from '../models/DatePieces';
import parsePiecesToDate from './parsePiecesToDate';

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

export default comparePiecesToDate;

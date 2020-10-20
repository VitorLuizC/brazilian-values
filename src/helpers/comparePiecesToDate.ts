import DateTimePieces from '../models/DateTimePieces';
import parsePiecesToDate from './parsePiecesToDate';

/**
 * Compare pieces of a date to values obtained from a Date instance.
 * @param pieces - Pieces of a date (date, month, year, hours, minutes and seconds).
 * @param instance - A Date instance.
 */
const comparePiecesToDate = (
  pieces: DateTimePieces,
  instance: Date = parsePiecesToDate(pieces),
): boolean => (
  instance.getDate() === pieces.date &&
  instance.getMonth() === pieces.month &&
  instance.getFullYear() === pieces.year &&
  instance.getHours() === pieces.hours &&
  instance.getMinutes() === pieces.minutes &&
  instance.getSeconds() === pieces.seconds
);

export default comparePiecesToDate;

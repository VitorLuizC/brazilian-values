import DatePieces from '../models/DatePieces';

/**
 * Transforms pieces of a date into a Date instance.
 * @param pieces - Date pieces.
 */
const parsePiecesToDate = (
  pieces: DatePieces,
): Date => new Date(pieces.year, pieces.month, pieces.date);

export default parsePiecesToDate;

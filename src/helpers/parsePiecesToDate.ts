import DatePieces from '../models/DatePieces';
import TimePieces from '../models/TimePieces';

/**
 * Transforms pieces of a date into a Date instance.
 * @param pieces - Date pieces.
 */
const parsePiecesToDate = (
  pieces: DatePieces & TimePieces,
): Date => new Date(pieces.year, pieces.month, pieces.date, pieces.hours, pieces.minutes, pieces.seconds);

export default parsePiecesToDate;

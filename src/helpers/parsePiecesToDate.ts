import DateTimePieces from "../models/DateTimePieces";

/**
 * Transforms pieces of a date into a Date instance.
 * @param pieces - Date pieces.
 */
const parsePiecesToDate = (
  pieces: DateTimePieces,
): Date => new Date(pieces.year, pieces.month, pieces.date, pieces.hours, pieces.minutes, pieces.seconds);

export default parsePiecesToDate;

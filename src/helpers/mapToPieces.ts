import DatePieces from '../models/DatePieces';
import TimePieces from '../models/TimePieces';

/**
 * Resolve a brazilian formatted date or datetime into date, month, year  pieces and hours, minutes and seconds pieces (if contains time).
 * @param value - A date in DD/MM/YYYY or DD/MM/YYYY HH:mm:ss.
 */
const mapToPieces = (
  value: string,
): DatePieces & TimePieces => {
  const expression = /^(\d{2})\/(\d{2})\/(\d{4})(\s?((\d{2}):(\d{2}):(\d{2})))?$/;
  const [, DD, MM, YYYY, , , HH, mm, ss] = expression.exec(value)!;
  return {
    date: parseInt(DD, 10),
    year: parseInt(YYYY, 10),
    month: parseInt(MM, 10) - 1,
    hours: parseInt(HH ?? 0, 10),
    minutes: parseInt(mm ?? 0, 10),
    seconds: parseInt(ss ?? 0, 10)
  };
};

export default mapToPieces;

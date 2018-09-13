import DatePieces from '../models/DatePieces';

/**
 * Resolve a brazilian formatted date into date, month and year pieces.
 * @param value - A date in DD/MM/YYYY.
 */
const mapToPieces = (
  value: string,
): DatePieces => {
  const expression = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const [ , DD, MM, YYYY ] = expression.exec(value)!;
  return {
    date: parseInt(DD, 10),
    year: parseInt(YYYY, 10),
    month: parseInt(MM, 10) - 1,
  };
};

export default mapToPieces;

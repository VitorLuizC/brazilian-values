/**
 * Get remaining of 11 or `0` if lower than 2.
 * @param value - Value used remaining.
 */
const getRemaining = (
  value: number,
): number => (value % 11) < 2 ? 0 : 11 - (value % 11);

export default getRemaining;

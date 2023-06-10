export type Range = number | [number, number];

export const normalizeRange = (
  range: number | [number, number],
  limit: number
): [number, number] => {
  if (Array.isArray(range)) return range;

  if (range >= 0) return [0, range];

  return [limit - Math.abs(range), limit];
};

export const within = (
  range: [number, number],
  value: number,
): boolean => value >= range[0] && value <= range[1]

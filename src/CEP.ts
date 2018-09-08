import mapToNumeric from './helpers/mapToNumeric';

/**
 * Format a `string` number sequence into CEP format.
 * @param value A `string` with CEP numbers.
 */
export const format = (
  value: string,
) => (
  mapToNumeric(value)
    .replace(/(\d{5})(\d{1,3})/, '$1-$2')
);

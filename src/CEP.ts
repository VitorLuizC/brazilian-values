/**
 * Format a `string` number sequence into CEP format.
 * @param value A `string` with CEP numbers.
 */
export const format = (
  value: string,
) => (
  value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{1,3})/, '$1-$2')
);

/**
 * Check if a brazilian formatted date, `string`, is a valid date.
 * @param value - A brazilian formatted date, `string`.
 */
export const validate = (
  value: string,
): boolean => {
  const expression = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (!expression.test(value))
    return false;
  const [ _, DD, MM, YYYY ] = expression.exec(value);
  const native = new Date(+YYYY, +MM, +DD);
  return (
    native.getDate() === +DD &&
    native.getMonth() === +MM &&
    native.getFullYear() === +YYYY
  );
};

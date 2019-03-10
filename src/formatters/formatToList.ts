/**
 * Formats an Array into brazilian formatted list.
 * @param value - An array of string values.
 */
const formatToList = (
  value: string[],
): string => {
  let str = "";
  let arrSize = value.length;

  value.map((item, i) => {
    if (i === 0) {
      return (str += `${item}`);
    } else if (i + 1 === arrSize) {
      return (str += ` e ${item}`);
    }
    return (str += `, ${item}`);
  });

  return str;
};

export default formatToList;

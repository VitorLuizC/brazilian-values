/**
 * Capitalizes a word.
 * @param word - A `string` (word) to be capitalized.
 */
const capitalizeWord = (
  word: string,
): string => (
  word.charAt(0).toLocaleUpperCase() + word.substr(1).toLocaleLowerCase()
);

export default capitalizeWord;

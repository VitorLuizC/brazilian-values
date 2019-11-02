import capitalizeWord from '../helpers/capitalizeWord';
import splitIntoWords from '../helpers/splitIntoWords';

/**
 * Options for `formatToCapitalizedd` function.
 */
type Options = {
  wordsToKeepLowerCase?: string[];
  wordsToKeepUpperCase?: string[];
};

/**
 * A list of default words to keep upper case.
 */
const DEFAULT_WORDS_TO_KEEP_UPPER_CASE = [
  'cnpj',
  'cpf',
  'ltda',
  'qp',
  'tv',
];

/**
 * A list of default words to keep lower case.
 */
const DEFAULT_WORDS_TO_KEEP_LOWER_CASE = [
  'a',
  'com',
  'da',
  'das',
  'de',
  'do',
  'dos',
  'e',
  'em',
  'i',
  'na',
  'nas',
  'no',
  'nos',
  'o',
  'por',
  'sem',
  'u',
];

/**
 * Capitaliza as palavras de um texto, com exceção das palavras configuradas
 * para serem deixadas em caixa-alta ou em caixa-baixa (menos a primeira palavra
 * que não será caixa-baixa mesmo se configurada como).
 *
 * @example ```js
 * formatToCapitalized('SERVIDOR PÚBLICO MUNICIPAL')
 * //=> 'Servidor Público Municipal'
 * 
 * formatToCapitalized('   os PrimEIROS  HOMens da tERra', {
 *   wordsToKeepLowerCase: ['os', 'da']
 * })
 * //=> 'Os Primeiros Homens da Terra'
 * 
 * formatToCapitalized('nova tv foi lançada', {
 *   wordsToKeepUpperCase: ['tv']
 * })
 * //=> 'Nova TV Foi Lançada'
 * ```
 * @param value - A `string` to capitalize
 */
const formatToCapitalized = (
  value: string,
  {
    wordsToKeepLowerCase = DEFAULT_WORDS_TO_KEEP_LOWER_CASE,
    wordsToKeepUpperCase = DEFAULT_WORDS_TO_KEEP_UPPER_CASE,
  }: Options = {}
): string => (
  splitIntoWords(value)
    .map((word, index) => {
      const lowerCaseWord = word.toLocaleLowerCase();
      if (index > 0 && wordsToKeepLowerCase.indexOf(lowerCaseWord) !== -1)
        return lowerCaseWord;
      if (wordsToKeepUpperCase.indexOf(lowerCaseWord) !== -1)
        return word.toLocaleUpperCase();
      return capitalizeWord(word);
    })
    .join(' ')
);

export default formatToCapitalized;

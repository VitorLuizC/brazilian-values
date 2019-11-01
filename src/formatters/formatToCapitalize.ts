/**
 * Capitalize a `string`
 * @example ```js
 * formatToCapitalize('SERVIDOR PÚBLICO MUNICIPAL')
 * //=> 'Servidor Público Municipal'
 *
 * formatToCapitalize('PETROLINA DE GOIÁS')
 * //=> 'Petrolina de Goiás'
 *
 * formatToCapitalize('ELEITO POR QP')
 * //=> 'Eleito por QP'
 *
 * formatToCapitalize('HELLO WORLD', ['word'])
 * //=> 'Hello world'
 * 
 * formatToCapitalize('HELLO WORLD', ['world'], ['hello'])
 * //=> 'HELLO world'
 * ```
 * @param value - A `string` to capitalize
 */
const formatToCapitalize = (
  value: string,
  lowercaseWords?: [string],
  uppercaseWords?: [string],
): string => {

  if (typeof (value) !== 'string') {
    return value
  }

  const keepLowercase = [...keepLowercaseList, ...lowercaseWords || []]
  const keepUppercase = [...keepUppercaseList, ...uppercaseWords || []]

  return value
    .split(' ')
    .filter(word => !!word)
    .map((word, index) => {
      const lowercase = word.toLowerCase()
      return (keepLowercase.includes(lowercase) && index !== 0)
        ? lowercase
        : keepUppercase.includes(lowercase)
          ? lowercase.toUpperCase()
          : `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`
    })
    .join(' ')
};

export default formatToCapitalize;

const keepUppercaseList = [
  'cnpj',
  'cpf',
  'ltda',
  'qp',
  'tv',
]

const keepLowercaseList = [
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
]

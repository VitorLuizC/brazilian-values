const BASE_LENGTH = 12
const REGEX_BASE_CNPJ = /^[A-Z\d]{12}$/i
const REGEX_FULL_CNPJ = /^[A-Z\d]{12}\d{2}$/i
const REGEX_MASK_CHARACTERS = /[.\/-]/g
const REGEX_INVALID_CHARACTERS = /[^A-Z\d.\/-]/i
const ASCII_ZERO = '0'.charCodeAt(0)
const CHECK_DIGIT_WEIGHT = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
const ZEROED_BASE = '000000000000'

const removeMask = (cnpj: string): string =>
  cnpj.replace(REGEX_MASK_CHARACTERS, '')

const calculateCheckDigits = (baseCNPJ: string): string => {
  if (REGEX_INVALID_CHARACTERS.test(baseCNPJ))
    throw new Error('CNPJ contains invalid characters')

  const raw = removeMask(baseCNPJ)

  if (!REGEX_BASE_CNPJ.test(raw) || raw === ZEROED_BASE)
    throw new Error('Invalid base CNPJ for check digits calculation')

  const digits = raw.toUpperCase().split('').map((char: string) => char.charCodeAt(0) - ASCII_ZERO)
  const sum1 = digits.reduce(
    (acc: number, digit: number, index: number) => acc + digit * CHECK_DIGIT_WEIGHT[index + 1],
    0,
  )
  const dv1 = sum1 % 11 < 2 ? 0 : 11 - (sum1 % 11)
  const sum2 =
    digits.reduce(
      (acc: number, digit: number, index: number) => acc + digit * CHECK_DIGIT_WEIGHT[index],
      0,
    ) +
    dv1 * CHECK_DIGIT_WEIGHT[BASE_LENGTH]
  const dv2 = sum2 % 11 < 2 ? 0 : 11 - (sum2 % 11)

  return `${dv1}${dv2}`
}

/**
 * Pattern to match formatted CNPJ (AA.AAA.AAA/AAAA-DV or 12 alphanumeric + 2 digits).
 */
export const CNPJ_PATTERN = /^([A-Z\d]{12}\d{2}|[A-Z\d]{2}\.[A-Z\d]{3}\.[A-Z\d]{3}\/[A-Z\d]{4}-\d{2})$/i

/**
 * Check if value is a valid CNPJ (base 12 alphanumeric + 2 numeric check digits).
 * @example ```js
 * isCNPJ('41142260000189')
 * //=> true
 *
 * isCNPJ('45.723.174/0001-10')
 * //=> true
 *
 * isCNPJ('411407182')
 * //=> false
 *
 * isCNPJ('11.111.111/1111-11')
 * //=> false
 * ```
 * @param value - A text containing a CNPJ.
 */
const isCNPJ = (value: string): boolean => {
  if (!CNPJ_PATTERN.test(value))
    return false

  const raw = removeMask(value)

  if (!REGEX_FULL_CNPJ.test(raw))
    return false

  const base = raw.slice(0, BASE_LENGTH)
  if (base === ZEROED_BASE)
    return false

  const providedCheckDigits = raw.slice(BASE_LENGTH)
  let calculatedCheckDigits: string
  try {
    calculatedCheckDigits = calculateCheckDigits(base)
  } catch {
    return false
  }

  return providedCheckDigits === calculatedCheckDigits
}

export default isCNPJ

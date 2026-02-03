const REGEX_MASK_CHARACTERS = /[.\/-]/g
const BASE_LENGTH = 12
const DV_LENGTH = 2

const normalizeCNPJ = (value: string): string =>
  value
    .replace(REGEX_MASK_CHARACTERS, '')
    .split('')
    .reduce<[string, string]>(
      ([base, dv], c) =>
        base.length < BASE_LENGTH && /[A-Z\d]/i.test(c) ? [base + c, dv] :
        dv.length < DV_LENGTH && /\d/.test(c) ? [base, dv + c] :
        [base, dv],
      ['', ''],
    )
    .join('')

/**
 * Formats step-by-step a `string` value into a CNPJ (AA.AAA.AAA/AAAA-DV).
 * Base: 12 alphanumeric chars. DV: 2 numeric digits.
 * @example ```js
 * formatToCNPJ('128781')
 * //=> '12.878.1'
 *
 * formatToCNPJ('32284981000138')
 * //=> '32.284.981/0001-38'
 *
 * formatToCNPJ('00.0.000.00.00--00-00')
 * //=> '00.000.000/0000-00'
 *
 * formatToCNPJ('1A2B3C4D5E6F78')
 * //=> '1A.2B3.C4D/5E6F-78'
 * ```
 * @param value - A `string` value of a CNPJ.
 */
const formatToCNPJ = (value: string): string => {
  const n = normalizeCNPJ(value)
  let result = n.slice(0, 2)
  if (n.length > 2) result += '.' + n.slice(2, 5)
  if (n.length > 5) result += '.' + n.slice(5, 8)
  if (n.length > 8) result += '/' + n.slice(8, 12)
  if (n.length > 12) result += '-' + n.slice(12, 14)
  return result
}

export default formatToCNPJ;

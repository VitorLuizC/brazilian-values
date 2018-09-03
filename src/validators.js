import moment from 'moment'
import { getDateFormat, getConstructor } from './helpers'

/**
 * Valida se o construtor do valor é o especificado.
 * @example ```
 * (12, 'Number') => true
 * ({ name: 'Lucas' }, 'Object') => true
 * ([2, 3], 'Set') => false
 * ```
 * @param {*} value
 * @param {String} constructor
 * @returns {Boolean}
 */
export const is = (value, constructor) => {
  const isEquals = constructor === getConstructor(value)
  return isEquals
}

/**
 * Valida se é uma data com o formato especificado ou, quando não especificado,
 * valida se é um dos formatos 'DD/MM/YYYY', 'DD-MM-YYYY' e 'YYYY-MM-DD'.
 * @example ```
 * ('3/102/2006') => false
 * ('31/02/2006') => false
 * ('21/12/2006') => true
 * ('21/12/2006', 'YYYY-MM-DD') => false
 * ```
 * @param {String} date
 * @param {String} [format]
 * @returns {Boolean}
 */
export const isDate = (date, format = null) => {
  const from = format || getDateFormat(date)
  const isValid = from ? moment(date, from).isValid() : false
  return isValid
}

/**
 * Valida, de forma simples*, se o valor é um email válido.
 * @param {String} value
 * @returns {Boolean}
 */
export const isEmail = (value) => {
  const isValid = is(value, 'String') && /^.+@.+\..+$/.test(value)
  return isValid
}

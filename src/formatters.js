import moment from 'moment'
import { getDateFormat } from './helpers'

export const toCPF = (rawString) => {
  return rawString
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

export const toRG = (rawString) => {
  return rawString
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1})$/, '$1-$2')
}

export const toMoney = (rawString) => {
  return 'R$ ' + rawString.toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export const toAge = (date) => {
  const YEAR = 31557600000  // 1000ms * 3600s * 24d * 365.25
  const birthdate = +new Date(date)
  const age = ~~((Date.now() - birthdate) / YEAR)
  return age
}

/**
 * Formata uma data 'YYYY-MM-DD' ou 'DD-MM-YYYY' em 'DD/MM/YYYY'. Transforma
 * a data em 'YYYY-MM-DD' caso o segundo parâmetro seja "true".
 * @example ```
 * ('21-12-2006') => '21/12/2006'
 * ('2006-12-12') => '21/12/2006'
 * ('21/12/2006') => '21/12/2006'
 * ('21/12/2006', true) => '2006-12-21'
 * ('21-12-2006', true) => '2006-12-21'
 * ('2006-12-21', true) => '2006-12-21'
 * ```
 * @param {String} date
 * @param {Boolean} [toDatabase] Força o formato 'YYYY-MM-DD'.
 * @returns {String}
 */
export const toDate = (date, toDatabase = false) => {
  const from = getDateFormat(date)
  const to = toDatabase ? 'YYYY-MM-DD' : 'DD/MM/YYYY'
  const notNeeded = !from || (from === 'YYYY-MM-DD' && toDatabase) || (from === 'DD/MM/YYYY' && !toDatabase)
  const formatted = notNeeded ? date : moment(date, from).format(to)
  return formatted
}

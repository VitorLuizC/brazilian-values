import { is } from './validators'

/**
 * Obtém o formato da data ou null se não for possível identificar.
 * @example ```
 * ('2000-21-12') => ['YYYY-DD-MM', 'YYYY-MM-DD HH:mm:ss']
 * ('21-12-2000') => ['DD-MM-YYYY', 'DD-MM-YYYY HH:mm:ss']
 * ('21/12/2000 23:59:18') => ['DD/MM/YYYY', 'DD/MM/YYYY HH:mm:ss']
 * ('2000/12/21') => null
 * ```
 * @param {String} date
 * @returns {String}
 */
export const getDateFormat = (date) => {
  const isValid = is(date, 'String') && date.trim().length >= 10
  const format = !isValid ? null
    : /^\d{4}-\d{2}-\d{2}/.test(date) ? ['YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss']
    : /^\d{2}-\d{2}-\d{4}/.test(date) ? ['DD-MM-YYYY', 'DD-MM-YYYY HH:mm:ss']
    : /^\d{2}\/\d{2}\/\d{4}/.test(date) ? ['DD/MM/YYYY', 'DD/MM/YYYY HH:mm:ss']
    : null

  return format
}

/**
 * Obtém o construtor do valor.
 * @param {*} value
 * @returns {String}
 */
export const getConstructor = (value) => {
  const string = Object.prototype.toString.call(value)
  const [ , constructor ] = /\[object (.*?)\]/.exec(string)
  return constructor
}

/**
 * Usando um valor inicial, encadeia uma função e retorna seu resultado.
 * @param {A} initial
 * @param {function(A):function} callback
 * @param {Array.<*>} params
 * @returns {B}
 * @template A, B
 */
export const chain = (initial, callback, params) => {
  const value = params.reduce((value, args) => {
    return callback(value).apply(value, [...args])
  }, initial)

  return value
}

/**
 * Faz em forma de corrente o replace do texto usando os argumentos especificados.
 * @param {String} text
 * @param {Array.<*>} args
 * @returns {String}
 */
export const replace = (text, args) => chain(text, text => text.replace, args)

import moment from 'moment'
import { getDateFormat, replace } from './helpers'
import { is, isDate } from './validators'

/**
 * Transforma um valor para a formatação de CPF.
 * @example ```
 * ('00000000000') => '000.000.000-00'
 * ('12345678') => '123.456.78'
 * ('Abacaxi') => null
 * ```
 * @param {String} cpf
 * @returns {String}
 */
export const toCPF = (cpf) => {
  const isValid = is(cpf, 'String')
  const formatted = !isValid ? null : replace(cpf, [
    [/\D/g, ''],
    [/(\d{3})(\d)/, '$1.$2'],
    [/(\d{3})(\d)/, '$1.$2'],
    [/(\d{3})(\d{1,2})$/, '$1-$2']
  ])
  return formatted
}

/**
 * Transforma um valor para a formatação de RG.
 * @example ```
 * ('000000000') => '00.000.000-0'
 * ('12345678') => '123.456.78'
 * ('Abacaxi') => null
 * ```
 * @param {String} rg
 * @returns {String}
 */
export const toRG = (rg) => {
  const isValid = is(rg, 'String')
  const formatted = !isValid ? null : replace(rg.toUpperCase(), [
    [/[^\d|A|B|X]/g, ''],
    [/(\d{2})(\d)/, '$1.$2'],
    [/(\d{3})(\d)/, '$1.$2'],
    [/(\d{3})([\d|A|B|X]{1})$/, '$1-$2']
  ])
  return formatted
}

/**
 * Formata um valor para a formatação de moeda.
 * @example ```
 * ('1200') => 'R$ 1.200,00'
 * (15.50) => 'R$ 15,50'
 * ('Abacaxi') => null
 * ```
 * @param {String} number
 * @returns {String}
 */
export const toMoney = (number) => {
  const isValid = is(number, 'Number') || (is(number, 'String') && !isNaN(number))
  const formatted = !isValid ? null : 'R$ ' + replace((+number).toFixed(2), [
    ['.', ','],
    [/(\d)(?=(\d{3})+(?!\d))/g, '$1.']
  ])
  return formatted
}

/**
 * Obtém a quantidade de anos a partir da data.
 * @example ```
 * ('21-12-2006') => 10
 * ('2000-12-21') => 16
 * ('Abacaxi') => null
 * ```
 * @param {String} date
 * @returns {Number}
 */
export const toYears = (date) => {
  const format = getDateFormat(date)
  const from = format ? moment(date, format) : null
  const diff = from ? moment().diff(from, 'years') : null
  const years = is(diff, 'Number') && !isNaN(diff) ? diff : null
  return years
}

/**
 * Formata para o formato de dias.
 * @example ```
 * (2) => '2 dias'
 * (1) => '1 dia'
 * (0) => '0 dias'
 * ```
 * @param {Number} quantity
 * @returns {String}
 */
export const toDays = (quantity) => {
  const isValid = is(quantity, 'Number') && Number.isFinite(quantity)
  const days = (quantity === 1) ? '1 dia' : `${isValid ? ~~(quantity) : 0} dias`
  return days
}

/**
 * Formata uma data 'YYYY-MM-DD' ou 'DD-MM-YYYY' em 'DD/MM/YYYY'. Transforma
 * a data em 'YYYY-MM-DD' caso o segundo parâmetro seja "true".
 * @example ```
 * ('21-12-2006') => '21/12/2006'
 * ('2006-12-21') => '21/12/2006'
 * ('21/12/2006') => '21/12/2006'
 * ('21/12/2006', true) => '2006-12-21'
 * ('2006-12-21', true) => '2006-12-21'
 * ('2006/12/21') => null
 * ```
 * @param {String} date
 * @param {{ from: String, to: String, UTC: Boolean }} [options]
 * @returns {String}
 */
export const toDate = (date, { to = 'DD/MM/YYYY', from = getDateFormat(date), UTC: isUTC = false } = {}) => {
  const isValid = from && isDate(date, from)
  if (!isValid) {
    return null
  }
  const formatter = isUTC ? moment.utc : moment
  const formatted = formatter(date, from).format(to)
  return formatted
}

/**
 * Usa a formatação de datas para retornar um intervalo.
 * @example ```
 * ({ start: '21-12-2006', end: '31-12-2006' }) => '21/12/2006 a 31/12/2006'
 * ```
 * @param {{ start: String, end: String }} dates
 * @param {{ from: String, to: String }} [options]
 * @returns {String}
 */
export const toInterval = (dates, options = {}) => {
  const { start, end } = dates
  const interval = `${toDate(start, options)} a ${toDate(end, options)}`
  return interval
}

/**
 * Faz uma verificação simples e coloca o caractere para vazio caso o valor seja
 * vazio (null, undefined, '').
 * @param {*} value
 * @param {String} char
 * @returns {String}
 */
export const toEmpty = (value, char = '-') => value || char

/**
 * Formata um valor para o formato de telefone.
 * @param {String} value
 * @returns {String}
 */
export const toPhone = (value) => {
  const isValid = is(value, 'String')
  const formatted = !isValid ? null : replace(value, [
    [/\D/g, ''],
    [/(\d{1,2})/, '($1'],
    [/(\(\d{2})(\d{1,4})/, '$1) $2'],
    [/( \d{4})(\d{1,4})/, '$1-$2'],
    [/( \d{4})(?:-)(\d{1})(\d{4})/, '$1$2-$3']
  ])
  return formatted
}

/**
 * Formata o texto removendo seus acentos.
 * @example ```
 * ('Vítor') => 'Vitor'
 * ('Olá, tudo bem com você?') => 'Ola, tudo bem com voce?'
 * ```
 * @param {String} value
 * @returns {String}
 */
export const toClean = (value) => {
  const isValid = is(value, 'String')
  const chars = [
    'àáäâãèéëêìíïîòóöôõùúüûçÀÁÄÂÃÈÉËÊÌÍÏÎÒÓÖÔÕÙÚÜÛÇ',
    'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC'
  ]
  const hasSpecial = new RegExp(chars[0].split('').join('|'), 'g')
  const formatted = !isValid ? null : value.replace(hasSpecial, (char) => {
    const index = chars[0].indexOf(char)
    const clean = chars[1][index]
    return clean
  })
  return formatted
}

/**
 * Formata um texto o transformando em _kebab-case_.
 * @param {String} value
 * @returns {String}
 */
export const toSlug = (value) => {
  const isValid = is(value, 'String')
  const clean = isValid ? toClean(value.toLowerCase()) : null
  const formatted = !isValid ? null : replace(clean, [
    [/\\|ß|·|\/|_|,|:|;|\s/g, '-'],
    [/&/g, '-e-'],
    [/[^\w-]+/g, ''],
    [/--+/g, '-'],
    [/^-+/, ''],
    [/-+$/, '']
  ])
  return formatted
}

/**
 * Formata um valor para CEP.
 * @param {String} value
 * @returns {Boolean}
 */
export const toCEP = (value) => {
  const isValid = is(value, 'String')
  const formatted = !isValid ? null : replace(value, [
    [/\D/g, ''],
    [/(\d{5})(\d{1,3})/, '$1-$2']
  ])
  return formatted
}

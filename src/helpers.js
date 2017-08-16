/**
 * Obtém o formato da data ou null se não for possível identificar.
 * @example ```
 * ('2000-21-12') => 'YYYY-DD-MM'
 * ('21-12-2000') => 'DD-MM-YYYY'
 * ('21/12/2000') => 'DD/MM/YYYY'
 * ('12/21/2000') => 'DD/MM/YYYY'
 * ('2000/12/21') => null
 * ```
 * @param {String} date
 * @returns {String}
 */
export const getDateFormat = (date) => {
  const isValid = typeof date === 'string' && date.trim().length === 10
  const format = !isValid ? null
    : /^\d{4}-\d{2}-\d{2}$/.test(date) ? 'YYYY-MM-DD'
    : /^\d{2}-\d{2}-\d{4}$/.test(date) ? 'DD-MM-YYYY'
    : /^\d{2}\/\d{2}\/\d{4}$/.test(date) ? 'DD/MM/YYYY'
    : null

  return format
}

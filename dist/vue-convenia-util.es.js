import moment from 'moment';

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
var getDateFormat = function (date) {
  var isValid = typeof date === 'string' && date.trim().length === 10;
  var format = !isValid ? null
    : /^\d{4}-\d{2}-\d{2}$/.test(date) ? 'YYYY-MM-DD'
    : /^\d{2}-\d{2}-\d{4}$/.test(date) ? 'DD-MM-YYYY'
    : /^\d{2}\/\d{2}\/\d{4}$/.test(date) ? 'DD/MM/YYYY'
    : null;

  return format
};

var toCPF = function (rawString) {
  return rawString
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
};

var toRG = function (rawString) {
  return rawString
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1})$/, '$1-$2')
};

var toMoney = function (rawString) {
  return 'R$ ' + rawString.toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
};

var toAge = function (date) {
  var YEAR = 31557600000;  // 1000ms * 3600s * 24d * 365.25
  var birthdate = +new Date(date);
  var age = ~~((Date.now() - birthdate) / YEAR);
  return age
};

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
var toDate = function (date, toDatabase) {
  if ( toDatabase === void 0 ) toDatabase = false;

  var from = getDateFormat(date);
  var to = toDatabase ? 'YYYY-MM-DD' : 'DD/MM/YYYY';
  var notNeeded = !from || (from === 'YYYY-MM-DD' && toDatabase) || (from === 'DD/MM/YYYY' && !toDatabase);
  var formatted = notNeeded ? date : moment(date, from).format(to);
  return formatted
};


var $format = Object.freeze({
	toCPF: toCPF,
	toRG: toRG,
	toMoney: toMoney,
	toAge: toAge,
	toDate: toDate
});

var isCPF = function (cpf) {
  var isInvalid = function (cpf, rest, pos) { return rest !== parseInt(cpf.substring(pos, pos + 1)); };

  var sumDigit = function (cpf, digit) { return 11 - (cpf.substring(0, digit).split('').reduce(function (acc, curr, index) {
    acc += parseInt(curr) * ((digit + 1) - index);
    return acc
  }, 0) % 11); };

  var getRest = function (sum) { return sum > 9 ? 0 : sum; };

  cpf = cpf.replace(/[\D]/gi, '');

  if (!cpf.match(/^\d+$/)) { return false }

  if (cpf === '00000000000' || cpf.length !== 11) { return false }

  if (isInvalid(cpf, getRest(sumDigit(cpf, 9)), 9)) { return false }

  if (isInvalid(cpf, getRest(sumDigit(cpf, 10)), 10)) { return false }

  return true
};

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
var isDate = function (date, format) {
  if ( format === void 0 ) format = null;

  var from = format || getDateFormat(date);
  var isValid = from ? moment(date, format).isValid() : false;
  return isValid
};


var $validation = Object.freeze({
	isCPF: isCPF,
	isDate: isDate
});

var install = function (Vue, options) {
  if ( options === void 0 ) options = {};

  if (options.formaters) {
    Vue.prototype.$format = $format;
  }

  if (options.formatFilters) {
    Object.keys($format).forEach(function (name) {
      var handler = $format[name];
      Vue.filter(name, handler);
    });
  }

  if (options.validations) {
    Vue.prototype.$validation = $validation;
  }
};

export { $format as format, $validation as validation };export default install;

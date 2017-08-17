import * as $format from './formatters'
import * as $validation from './validations'

export { $format as format }

export { $validation as validation }

/**
 * Opções do plugin.
 * @typedef {Object} Options
 * @property {Boolean} formatters
 * @property {Boolean} formatFilters
 * @property {Boolean} validations
 */

/**
 * Adiciona as funções auxiliares definidas no protótipo do Vue, e
 * consequentemente aos componentes.
 * @param {Vue} Vue
 * @param {Options} options
 */
const install = (Vue, options = {}) => {
  if (options.formatters) {
    Vue.prototype.$format = $format
  }

  if (options.formatFilters) {
    Object.keys($format).forEach(name => {
      const handler = $format[name]
      Vue.filter(name, handler)
    })
  }

  if (options.validations) {
    Vue.prototype.$validation = $validation
  }
}

export default install

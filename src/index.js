import * as $format from './formatters'
import * as $validate from './validators'
import * as $mixins from './mixins'
import integrations from './integrations'

export { $format as format, $validate as validate, $mixins as mixin }

/**
 * Opções do plugin.
 * @typedef {Object} Options
 * @property {Boolean} formatters
 * @property {Boolean} formatFilters
 * @property {Boolean} validators
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

  if (options.validators) {
    Vue.prototype.$validate = $validate
  }
}

/**
 * Integra-se a lib definida usando o object/função de integração e as opções da
 * integração.
 * @example ```
 * import { Validator } from 'vee-validate'
 * import Util from 'vue-convenia-util'
 *
 * Util.integrate('vee-validate', Validator)
 * ```
 * @param {String} lib
 * @param {(Object|Function)} integrator
 * @param {Object} options
 * @returns {Boolean}
 */
const integrate = (lib, integrator, options = {}) => {
  const integration = integrations.hasOwnProperty(lib) ? integrations[lib] : null
  const success = integration ? integration(integrator, options) : false
  return success
}

export default {
  install,
  integrate
}

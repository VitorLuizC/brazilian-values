import * as $format from './formaters'
import * as $validation from './validations'

export { $format as format }

export { $validation as validation }

const install = (Vue, options = {}) => {
  if (options.formaters) {
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

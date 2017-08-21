import * as validate from './validators'

/**
 * Integra automaticamente as funções de validação ao vee-validade.
 * @param {vee-validate.Validator} Validator
 * @param {Object.<String, { name: String, getMessage: Function }>} options
 */
const VeeValidateIntegration = (Validator, options) => {
  const defaultOptions = {
    isCPF: {
      name: 'cpf',
      getMessage: () => 'CPF inválido.'
    },
    isCNPJ: {
      name: 'cnpj',
      getMessage: () => 'CNPJ inválido.'
    },
    isDate: {
      name: 'date',
      getMessage: () => 'Data inválida.'
    }
  }

  const rules = Object.assign({}, defaultOptions, options)

  Object.keys(rules)
    .map(key => Object.assign({}, rules[key], { validate: validate[key] }))
    .filter(rule => validate.is(rules, 'Object'))
    .forEach(rule => Validator.extend(rule.name, rule))

  return true
}

export default {
  'vee-validate': VeeValidateIntegration
}

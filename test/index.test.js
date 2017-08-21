import test from 'ava'
import sinon from 'sinon'
import Util, { format, validate } from '../'

const getVue = () => {
  const Vue = class {
    static use (plugin) {
      const install = (plugin && typeof plugin === 'object') ? plugin.install : plugin
      install.call(Vue)
    }

    static filter (name, handler) {}
  }

  return Vue
}

test('A exportação padrão é um objeto', (context) => {
  context.is(typeof Util, 'object')
})

test('Exporta o namespace "format"', (context) => {
  context.is(!!format, true)
  context.is(typeof format, 'object')
})

test('Exporta o namespace "validate"', (context) => {
  context.is(!!validate, true)
  context.is(typeof validate, 'object')
})

test('Implanta os plugins selecionados', (context) => {
  const Vue = getVue()
  const spy = sinon.spy(Vue, 'filter')
  const vm = new Vue()

  Util.install(Vue, {
    formatters: true,
    formatFilters: true,
    validators: true
  })

  context.is(spy.called, true)
  context.is(!!vm.$format, true)
  context.is(!!vm.$validate, true)
})

test('Implanta apenas os plugins selecionados', (context) => {
  const Vue = getVue()
  const spy = sinon.spy(Vue, 'filter')
  const vm = new Vue()

  Util.install(Vue, {
    formatters: false,
    formatFilters: false,
    validators: false
  })

  context.is(spy.called, false)
  context.is(!!vm.$format, false)
  context.is(!!vm.$validate, false)
})

test('integrate: Integra os validadores ao "vee-validate"', context => {
  const Validator = {
    validations: {},
    extend (name, handler) {
      this.validations[name] = handler
    }
  }

  const spy = sinon.spy(Validator, 'extend')

  Util.integrate('vee-validate', Validator, {
    isEmail: {
      name: 'email',
      getMessage: () => 'Email inválido.'
    }
  })

  context.is(spy.called, true)
  context.is(Validator.validations.cpf.validate === validate.isCPF, true)
  context.is(Validator.validations.cnpj.validate === validate.isCNPJ, true)
  context.is(Validator.validations.date.validate === validate.isDate, true)
  context.is(Validator.validations.email.validate === validate.isEmail, true)
})

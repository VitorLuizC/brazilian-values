import test from 'ava'
import sinon from 'sinon'
import install, { format, validate } from '../'

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

test('A exportação padrão é uma função', (context) => {
  context.is(typeof install, 'function')
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

  install(Vue, {
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

  install(Vue, {
    formatters: false,
    formatFilters: false,
    validators: false
  })

  context.is(spy.called, false)
  context.is(!!vm.$format, false)
  context.is(!!vm.$validate, false)
})

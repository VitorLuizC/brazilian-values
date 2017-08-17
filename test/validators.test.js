import test from 'ava'
import { validate } from '../'

test('isCPF: Verdadeiro para um CPF válido', (context) => {
  context.is(validate.isCPF('366.418.768-70'), true)
})

test('isCPF: Falso para um CPF inválido', (context) => {
  context.is(validate.isCPF('213.198.013-20'), false)
})

test('isCPF: Falso para algo que não "string"', (context) => {
  // Teste que valida a correção do issue #5
  // Link: https://github.com/convenia/vue-convenia-util/issues/5
  context.is(validate.isCPF(undefined), false)
  context.is(validate.isCPF(null), false)
  context.is(validate.isCPF(36641876870), false)
  context.is(validate.isCPF(true), false)
  context.is(validate.isCPF({}), false)
  context.is(validate.isCPF([]), false)
})

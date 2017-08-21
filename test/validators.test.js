import test from 'ava'
import { validate } from '../'

test('is: Verdadeiro para a comparação de um valor com seu construtor', (context) => {
  context.is(validate.is(null, 'Null'), true)
  context.is(validate.is(undefined, 'Undefined'), true)
  context.is(validate.is(1200, 'String'), false)
  context.is(validate.is('R$ 120,20', 'String'), true)
  context.is(validate.is([0, 1, 2, 3], 'Object'), false)
  context.is(validate.is({ name: 'Convenia' }, 'Object'), true)
})

test('isCPF: Verdadeiro para um CPF válido', (context) => {
  context.is(validate.isCPF('366.418.768-70'), true)
  context.is(validate.isCPF('36641876870'), true)
  context.is(validate.isCPF('213.198.013-20'), false)
  context.is(validate.isCPF('2131201872781'), false)
  context.is(validate.isCPF('11111111111'), true)
  context.is(validate.isCPF('00000000000'), false)
  context.is(validate.isCPF('111.111.111-11'), true)
  context.is(validate.isCPF('UHASHUISIH910'), false)
})

test('isCPF: Falso para dados que não sejam "string"', (context) => {
  // Teste que valida a correção do issue #5
  // Link: https://github.com/convenia/vue-convenia-util/issues/5
  context.is(validate.isCPF(undefined), false)
  context.is(validate.isCPF(null), false)
  context.is(validate.isCPF(36641876870), false)
})

test('isDate: Verdadeiro para uma data válida (DD/MM/YYYY | DD-MM-YYYY & YYYY-MM-DD)', (context) => {
  context.is(validate.isDate('28/03/2017'), true)
  context.is(validate.isDate('28-03-2017'), true)
  context.is(validate.isDate('2017-03-28'), true)
  context.is(validate.isDate('31/02/2017'), false)
})

test('isDate: Falso para uma data inválida ou fora da formatação padrão', (context) => {
  context.is(validate.isDate('03/28/2017'), false)
  context.is(validate.isDate('28-13-9017'), false)
  context.is(validate.isDate('0000-00-00'), false)
  context.is(validate.isDate('29/12'), false)
})

test('isDate: Valida usando o formato especificado ao invés de um dinâmico', (context) => {
  context.is(validate.isDate('2017-03', 'YYYY-MM'), true)
  context.is(validate.isDate('31/13/17', 'DD/MM/YY'), false)
  context.is(validate.isDate('28 02', 'DD MM'), true)
})

test('isDate: Falso para dados que não sejam "string"', (context) => {
  context.is(validate.isDate(undefined), false)
  context.is(validate.isDate(null), false)
  context.is(validate.isDate(36641876870), false)
})

test('isCNPJ: Verdadeiro para um CNPJ válido', (context) => {
  context.is(validate.isCNPJ('41142260000189'), true)
  context.is(validate.isCNPJ('45.723.174/0001-10'), true)
  context.is(validate.isCNPJ('41142260007182'), false)
  context.is(validate.isCNPJ('19.981.127/0001-10'), false)
})

test('isCNPJ: Falso para dados que não sejam "string"', (context) => {
  context.is(validate.isCNPJ(undefined), false)
  context.is(validate.isCNPJ(null), false)
  context.is(validate.isCNPJ(41142260000189), false)
})

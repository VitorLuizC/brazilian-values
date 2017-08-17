import test from 'ava'
import { format } from '../'

test('toCPF: Formata um CPF válido', (context) => {
  context.is(format.toCPF('00000000000'), '000.000.000-00')
})

test('toCPF: Formata parte de um CPF', (context) => {
  context.is(format.toCPF('00000000'), '000.000.00')
})

test('toRG: Formata parte de um CPF', (context) => {
  context.is(format.toRG('00000000'), '00.000.000')
})

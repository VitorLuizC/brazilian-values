import test from 'ava'
import { format } from '../'

test('toCPF: Formata um valor, ou parte dele para CPF', (context) => {
  context.is(format.toCPF('00000000000'), '000.000.000-00')
  context.is(format.toCPF('00000000'), '000.000.00')
  context.is(format.toCPF('366.418.768-70'), '366.418.768-70')
})

test('toCPF: Não formata valores inválidos', (context) => {
  context.is(format.toCPF('Abacaxi'), null)
  context.is(format.toCPF(undefined), null)
  context.is(format.toCPF(null), null)
})

test('toRG: Formata um valor, ou parte dele, para RG', (context) => {
  context.is(format.toRG('000000000'), '00.000.000-0')
  context.is(format.toRG('000000'), '00.000.0')
})

test('toRG: Não formata valores inválidos', (context) => {
  context.is(format.toRG('Abacaxi'), null)
  context.is(format.toRG(undefined), null)
  context.is(format.toRG(null), null)
})

test('toMoney: Formata um valor para moeda', (context) => {
  context.is(format.toMoney(1200.504), 'R$ 1.200,50')
  context.is(format.toMoney(0), 'R$ 0,00')
  context.is(format.toMoney('-74.89'), 'R$ -74,89')
})

test('toMoney: Não formata valores inválidos', (context) => {
  context.is(format.toMoney(null), null)
  context.is(format.toMoney(undefined), null)
  context.is(format.toMoney('XXI'), null)
  context.is(format.toMoney([]), null)
})

test('toYears: Obtém em anos a diferença de uam data', (context) => {
  context.is(format.toYears('28/03/1996'), 21)
  context.is(format.toYears('1979-04-13'), 38)
})

test('toYears: Não formata valores inválidos', (context) => {
  context.is(format.toYears(null), null)
  context.is(format.toYears(undefined), null)
  context.is(format.toYears('21/15/2017'), null)
})

test('toDate: Formata uma data (DD-MM-YYYY | YYYY-MM-DD) para DD/MM/YYYY', (context) => {
  context.is(format.toDate('21/08/2002'), '21/08/2002')
  context.is(format.toDate('21-08-2002'), '21/08/2002')
  context.is(format.toDate('2002-08-21'), '21/08/2002')
  context.is(format.toDate('2002-08-21'), '21/08/2002')
  context.is(format.toDate('2002-08-21'), '21/08/2002')
})

test('toDate: Com o toDatabase formata (DD-MM-YYYY | DD/MM/YYYY) para YYYY-MM-DD', (context) => {
  context.is(format.toDate('21/08/2002', true), '2002-08-21')
  context.is(format.toDate('21-08-2002', true), '2002-08-21')
  context.is(format.toDate('2002-08-21', true), '2002-08-21')
})

test('toDate: Não formata valores inválidos', (context) => {
  context.is(format.toDate(null), null)
  context.is(format.toDate(undefined), null)
  context.is(format.toDate('21/08/01'), null)
  context.is(format.toDate('21/30/2001'), null)
})

test('toEmpty: Retorna um caractere vazio para um dado vazio', (context) => {
  context.is(format.toEmpty(null), '-')
  context.is(format.toEmpty(undefined, '*'), '*')
  context.is(format.toEmpty(''), '-')
  context.is(format.toEmpty(NaN), '-')
})

test('toPhone: Formata um valor para telefone', (context) => {
  context.is(format.toPhone('11'), '(11')
  context.is(format.toPhone('11971626'), '(11) 9716-26')
  context.is(format.toPhone('1197162679'), '(11) 9716-2679')
  context.is(format.toPhone('11971626799'), '(11) 97162-6799')
})

test('toPhone: Não formata valores inválidos', (context) => {
  context.is(format.toPhone(null), null)
  context.is(format.toPhone(undefined), null)
  context.is(format.toPhone(''), null)
  context.is(format.toPhone(198928192), null)
})

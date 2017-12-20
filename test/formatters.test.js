import test from 'ava'
import { format } from '../'
import 'moment/locale/pt-br'

test('toCPF: Formata um valor, ou parte dele para CPF', (context) => {
  context.is(format.toCPF('00000000000'), '000.000.000-00')
  context.is(format.toCPF('00000000'), '000.000.00')
  context.is(format.toCPF('366.418.768-70'), '366.418.768-70')
})

test('toCPF: Não formata valores inválidos', (context) => {
  context.is(format.toCPF(undefined), null)
  context.is(format.toCPF(null), null)
})

test('toRG: Formata um valor, ou parte dele, para RG', (context) => {
  context.is(format.toRG('000000000'), '00.000.000-0')
  context.is(format.toRG('00000000a'), '00.000.000-A')
  context.is(format.toRG('00000000B'), '00.000.000-B')
  context.is(format.toRG('00000000x'), '00.000.000-X')
  context.is(format.toRG('000000'), '00.000.0')
})

test('toRG: Não formata valores inválidos', (context) => {
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

test('toDays: Formata um número para sua quantidade em dias', (context) => {
  context.is(format.toDays(null), '0 dias')
  context.is(format.toDays(undefined), '0 dias')
  context.is(format.toDays('quatro'), '0 dias')
  context.is(format.toDays(0), '0 dias')
  context.is(format.toDays(4.5), '4 dias')
  context.is(format.toDays(1), '1 dia')
  context.is(format.toDays(2), '2 dias')
})

test('toDate: Formata uma data (DD-MM-YYYY | YYYY-MM-DD) para DD/MM/YYYY', (context) => {
  context.is(format.toDate('21/08/2002'), '21/08/2002')
  context.is(format.toDate('21-08-2002'), '21/08/2002')
  context.is(format.toDate('2002-08-21'), '21/08/2002')
  context.is(format.toDate('2002-08-21'), '21/08/2002')
  context.is(format.toDate('2002-08-21'), '21/08/2002')
})

test('toDate: Usando as opções é possível definir formatos de entrada e saída', (context) => {
  context.is(format.toDate('21/08/2002', { from: 'DD/MM/YYYY', to: 'YYYY-MM-DD' }), '2002-08-21')
  context.is(format.toDate('2002-08-21', { to: 'YYYY/MM/DD' }), '2002/08/21')
  context.is(format.toDate('2002/08/21', { from: 'YYYY/MM/DD' }), '21/08/2002')
})

test('toDate: Usando as opções é possível escolher usar UTC ao invés da timezone', (context) => {
  context.is(format.toDate(1513791107947, { from: 'x', to: 'DD/MM/YYYY HH:mm', UTC: true }), '20/12/2017 17:31')
  context.is(format.toDate(1513791107947, { from: 'x', to: 'DD/MM/YYYY HH:mm', UTC: false }), '20/12/2017 15:31')
  context.is(format.toDate(1513791107947, { from: 'x', to: 'DD/MM/YYYY HH:mm' }), '20/12/2017 15:31')
  context.not(format.toDate(1513791107947, { from: 'x', to: 'DD/MM/YYYY HH:mm', UTC: true }), '20/12/2017 15:31')
})

test('toDate: Não formata valores inválidos', (context) => {
  context.is(format.toDate(null), null)
  context.is(format.toDate(undefined), null)
  context.is(format.toDate('21/08/01'), null)
  context.is(format.toDate('21/30/2001'), null)
})

test('toInterval: Formata o intervalo de datas', (context) => {
  context.is(format.toInterval({ start: '21-03-2006', end: '20-04-2006' }), '21/03/2006 a 20/04/2006')
  context.is(format.toInterval({ start: '21-03-2006', end: '20-04-2006' }, { to: 'MMMM' }), 'março a abril')
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
  context.is(format.toPhone(198928192), null)
})

test('toClean: Formata um texto removendo seus acentos', (context) => {
  context.is(format.toClean('Olá, tudo bem com você?'), 'Ola, tudo bem com voce?')
  context.is(format.toClean('São Paulo - SP'), 'Sao Paulo - SP')
})

test('toClean: Não formata valores inválidos', (context) => {
  context.is(format.toClean(null), null)
  context.is(format.toClean(undefined), null)
})

test('toSlug: Formata um texto para "kebab-case"', (context) => {
  context.is(format.toSlug('Olá, tudo bem com você?'), 'ola-tudo-bem-com-voce')
  context.is(format.toSlug('São Paulo - SP'), 'sao-paulo-sp')
})

test('toSlug: Não formata valores inválidos', (context) => {
  context.is(format.toSlug(null), null)
  context.is(format.toSlug(undefined), null)
})

test('toCEP: Formata um texto para CEP', (context) => {
  context.is(format.toCEP('15998030'), '15998-030')
  context.is(format.toCEP('159980'), '15998-0')
})

test('toCEP: Não formata valores inválidos', (context) => {
  context.is(format.toCEP(null), null)
  context.is(format.toCEP(undefined), null)
  context.is(format.toCEP(15998030), null)
})

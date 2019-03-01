import test from 'ava';
import {
  formatToBRL,
  formatToCEP,
  formatToCNPJ,
  formatToCPF,
  formatToDate,
  formatToNumber,
  formatToPhone,
  formatToRG,
} from '../';

test('formatToBRL', (context) => {
  context.is(formatToBRL(1200.504), 'R$ 1.200,50');
  context.is(formatToBRL(0), 'R$ 0,00');
  context.is(formatToBRL('-74.89'), 'R$ -74,89');
});

test('formatToCEP', (context) => {
  context.is(formatToCEP('15998030'), '15998-030');
  context.is(formatToCEP('159980'), '15998-0');
});

test('formatToCNPJ', (context) => {
  context.is(formatToCNPJ('128781'), '12.878.1');
  context.is(formatToCNPJ('32284981000138'), '32.284.981/0001-38');
  context.is(formatToCNPJ('00.0.000.00.00--00-00'), '00.000.000/0000-00');
});

test('formatToCPF', (context) => {
  context.is(formatToCPF('00000000000'), '000.000.000-00');
  context.is(formatToCPF('00000000'), '000.000.00');
  context.is(formatToCPF('366.418.768-70'), '366.418.768-70');
});

test('formatToDate', (context) => {
  context.is(formatToDate(new Date(2002, 7, 21)), '21/08/2002');
});

test('formatToPhone', (context) => {
  context.is(formatToPhone('11'), '(11');
  context.is(formatToPhone('11971626'), '(11) 9716-26');
  context.is(formatToPhone('1197162679'), '(11) 9716-2679');
  context.is(formatToPhone('11971626799'), '(11) 9 7162-6799');
});

test('formatToNumber', (context) => {
  context.is(formatToNumber(0),'0')
  context.is(formatToNumber(-1299),'-1.299')
  context.is(formatToNumber(.981),'0.981')
  context.is(formatToNumber('19898.1298'),'19.898,1298')
});

test('formatToRG', (context) => {
  context.is(formatToRG('000000000', 'SP'), '00.000.000-0');
  context.is(formatToRG('00.00.0000-a', 'RJ'), '00.000.000-A');
  context.is(formatToRG('00.000.000-B', 'SP'), '00.000.000-B');
  context.is(formatToRG('00000000x', 'RJ'), '00.000.000-X');
  context.is(formatToRG('MG-14.808.688', 'MG'), 'MG-14.808.688');
});

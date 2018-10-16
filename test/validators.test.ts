import test from 'ava';
import {
  isCNPJ,
  isCPF,
  isDate
} from '../';

test('isCNPJ', (context) => {
  context.is(isCNPJ('41142260000189'), true);
  context.is(isCNPJ('45.723.174/0001-10'), true);
  context.is(isCNPJ('41142260007182'), false);
  context.is(isCNPJ('19.981.127/0001-10'), false);
});

test('isCPF', (context) => {
  context.is(isCPF('366.418.768-70'), true);
  context.is(isCPF('36641876870'), true);
  context.is(isCPF('213.198.013-20'), false);
  context.is(isCPF('2131201872781'), false);
  context.is(isCPF('11111111111'), false);
  context.is(isCPF('00000000000'), false);
  context.is(isCPF('111.111.111-11'), false);
  context.is(isCPF('UHASHUISIH910'), false);
});

test('isDate', (context) => {
  context.is(isDate('03/08/2017'), true);
  context.is(isDate('28/13/9017'), false);
  context.is(isDate('00/00/0000'), false);
  context.is(isDate('31/02/2018'), false);
});

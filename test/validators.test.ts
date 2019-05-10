import test from 'ava';
import {
  isCEP,
  isCNPJ,
  isCPF,
  isDate
} from '../';

test('isCEP', (context) => {
 context.true(isCEP('02998-050'))
 context.true(isCEP('00000000'))
 context.false(isCEP('0'))
 context.false(isCEP('1982891928981982198'))
});

test('isCNPJ', (context) => {
  context.true(isCNPJ('41142260000189'));
  context.true(isCNPJ('45.723.174/0001-10'));
  context.false(isCNPJ('41142260007182'));
  context.false(isCNPJ('19.981.127/0001-10'));
});

test('isCPF', (context) => {
  context.true(isCPF('366.418.768-70'));
  context.true(isCPF('36641876870'));
  context.false(isCPF('213.198.013-20'));
  context.false(isCPF('2131201872781'));
  context.false(isCPF('11111111111'));
  context.false(isCPF('00000000000'));
  context.false(isCPF('111.111.111-11'));
  context.false(isCPF('UHASHUISIH910'));
});

test('isDate', (context) => {
  context.is(isDate('03/08/2017'), true);
  context.is(isDate('28/13/9017'), false);
  context.is(isDate('00/00/0000'), false);
  context.is(isDate('31/02/2018'), false);
});

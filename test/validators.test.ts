import test from 'ava';
import {
  isCEP,
  isCNPJ,
  isCPF,
  isDate,
  isDDD,
  isPhone,
  isCPFOrCNPJ,
} from '../src/brazilian-values';
import isCAEPF from '../src/validators/isCAEPF';

test('isCEP', (context) => {
 context.true(isCEP('50.833-000'));
 context.true(isCEP('02998-050'));
 context.true(isCEP('00000000'));
 context.false(isCEP('0'));
 context.false(isCEP('129.64-000'));
 context.false(isCEP('1982891928981982198'));
 context.false(isCEP('0299sansjads8-050'));
});

test('isCNPJ', (context) => {
  context.true(isCNPJ('41142260000189'));
  context.true(isCNPJ('45.723.174/0001-10'));
  context.false(isCNPJ('41142260007182'));
  context.false(isCNPJ('19.981.127/0001-10'));
  context.false(isCNPJ('64.637.agsvs009/0001-90'));
});

test('isCAEPF', (context) => {
  context.true(isCAEPF('41142260000101'));
  context.true(isCAEPF('457.231.740/001-22'));
  context.false(isCAEPF('45.723.174/0001-22'));
  context.false(isCAEPF('41142260007182'));
  context.false(isCAEPF('19.981.127/0001-10'));
  context.false(isCAEPF('64.637.agsvs009/0001-90'));
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
  context.false(isCPF('366.41askaosoa8.768-70'));
});

test('isCPFOrCNPJ', (context) => {
  context.true(isCPFOrCNPJ("41142260000189"));
  context.true(isCPFOrCNPJ("45.723.174/0001-10"));
  context.false(isCPFOrCNPJ("41142260007182"));
  context.false(isCPFOrCNPJ("19.981.127/0001-10"));
  context.false(isCPFOrCNPJ("64.637.agsvs009/0001-90"));
  context.true(isCPFOrCNPJ("366.418.768-70"));
  context.true(isCPFOrCNPJ("36641876870"));
  context.false(isCPFOrCNPJ("213.198.013-20"));
  context.false(isCPFOrCNPJ("2131201872781"));
  context.false(isCPFOrCNPJ("11111111111"));
  context.false(isCPFOrCNPJ("00000000000"));
  context.false(isCPFOrCNPJ("111.111.111-11"));
  context.false(isCPFOrCNPJ("UHASHUISIH910"));
  context.false(isCPFOrCNPJ("366.41askaosoa8.768-70"));
})

test('isDate', (context) => {
  context.true(isDate('03/08/2017'));
  context.false(isDate('28/13/9017'));
  context.false(isDate('00/00/0000'));
  context.false(isDate('31/02/2018'));
});

test('isDDD', (context) => {
  context.true(isDDD('81'));
  context.false(isDDD('10'));
  context.false(isDDD('A#'));
});

test('isPhone', (context) => {
  context.true(isPhone('+55 (11) 9 8273-1182'));
  context.true(isPhone('11 9 8273 1182'));
  context.true(isPhone('1139723768'));
  context.false(isPhone('(23) 3972-3768'));
  context.false(isPhone('(13) 6 5093-2093'));
  context.false(isPhone('(81) 555 178'));
});

import { CNPJ, CPF } from '../';
import test from 'ava';

test('Module exports named brazilian values', (context) => {
  context.truthy(CNPJ);
  context.is(typeof CNPJ, 'object');
  context.truthy(CPF);
  context.is(typeof CPF, 'object');
});

import test from 'ava';
import {
  parseToArray,
  parseToDate,
  parseToNumber,
} from '../';

test('parseToArray: Parses a brazilian formatted list to an Array', (context) => {
  const value1 = parseToArray('');
  const value2 = parseToArray('1');
  const value3 = parseToArray('1 e 2');
  const value4 = parseToArray('1, 2, 3, 4 e 5');
  const value5 = parseToArray('Fernanda, Luana e Ana Carolina');

  context.deepEqual(value1, []);
  context.deepEqual(value2, ['1']);
  context.deepEqual(value3, ['1', '2']);
  context.deepEqual(value4, ['1', '2', '3', '4', '5']);
  context.deepEqual(value5, ['Fernanda', 'Luana', 'Ana Carolina']);
});

test('parseToDate: Parses a brazilian formatted date to a Date instance', (context) => {
  const date = parseToDate('28/03/1996');

  context.is(date.getDate(), 28);
  context.is(date.getMonth(), 2);
  context.is(date.getFullYear(), 1996);
});

test('parseToDate: Throws errors on invalid pattern or date.', (context) => {
  context.throws(
    () => parseToDate('01-01-2001'),
    { instanceOf: Error },
    'Value "01-01-2001" does not match format.'
  );
  context.throws(
    () => parseToDate('31/02/2001'),
    { instanceOf: Error },
    'Value "31/02/2001" is an invalid date.'
  );
});

test('parseToNumber: Parses a brazilian formatted number to number', (context) => {
  context.is(parseToNumber('10'), 10);
  context.is(parseToNumber('-1.299'), -1299);
  context.is(parseToNumber('0,981'), 0.981);
  context.is(parseToNumber('19.898,1298'), 19898.1298);
});

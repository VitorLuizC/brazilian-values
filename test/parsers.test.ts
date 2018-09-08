import test from 'ava';
import {
  parseToDate,
} from '../';

test('parseToDate: Parses a brazilian formatted date to a Date instance', (context) => {
  const date = parseToDate('28/03/1996');

  context.is(date.getDate(), 28);
  context.is(date.getMonth(), 2);
  context.is(date.getFullYear(), 1996);
});

test('parseToDate: Throws errors on invalid pattern or date.', (context) => {
  context.throws(() => parseToDate('01-01-2001'), 'Value "01-01-2001" does not match format.');
  context.throws(() => parseToDate('31/02/2001'), 'Value "31/02/2001" is an invalid date.');
});

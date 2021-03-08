import test from 'ava';
import addThousandSeparators from './addThousandSeparators.js';

test('adds thousand separators to stringified number', (context) => {
  context.is(addThousandSeparators('0'), '0');
  context.is(addThousandSeparators('932'), '932');
  context.is(addThousandSeparators('-129'), '-129');
  context.is(addThousandSeparators('-17839612'), '-17.839.612');
  context.is(addThousandSeparators('129873324897'), '129.873.324.897');
});

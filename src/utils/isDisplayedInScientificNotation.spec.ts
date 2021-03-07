import test from 'ava';

import isDisplayedInScientificNotation from './isDisplayedInScientificNotation.js';

test('returns `true` for numbers displayed in scientific notation', (context) => {
  context.true(isDisplayedInScientificNotation(1e21));
  context.true(isDisplayedInScientificNotation(999999999999999934464));
});

test('returns `true` for negative numbers displayed in scientific notation', (context) => {
  context.true(isDisplayedInScientificNotation(-1e21));
  context.true(isDisplayedInScientificNotation(-999999999999999934464));
});

test('returns `false` for numbers not displayed in scientific notation', (context) => {
  context.false(isDisplayedInScientificNotation(0));
  context.false(isDisplayedInScientificNotation(1e20));
  context.false(isDisplayedInScientificNotation(98717283778912378));
  context.false(isDisplayedInScientificNotation(999999999999999934463));
});

test('returns `false` for negative numbers not displayed in scientific notation', (context) => {
  context.false(isDisplayedInScientificNotation(-0));
  context.false(isDisplayedInScientificNotation(-1e20));
  context.false(isDisplayedInScientificNotation(-98717283778912378));
  context.false(isDisplayedInScientificNotation(-999999999999999934463));
});

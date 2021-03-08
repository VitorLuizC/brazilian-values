import test from 'ava';
import stringifyNumber from './stringifyNumber.js';

test('stringifies received number', (context) => {
  context.is(stringifyNumber(0), '0');
  context.is(stringifyNumber(-0), '0');
  context.is(stringifyNumber(128), '128');
  context.is(stringifyNumber(-213890), '-213890');
  context.is(stringifyNumber(7_891_239), '7891239');
  context.is(stringifyNumber(-0.12897), '-0.12897');
  context.is(stringifyNumber(1.198_721), '1.198721');
});

test('throws error if received number is NaN', (context) => {
  context.throws(() => stringifyNumber(NaN), {
    instanceOf: Error,
    message: "Can't stringify NaN.",
  });

  context.throws(() => stringifyNumber('NaN'), {
    instanceOf: Error,
    message: "Can't stringify NaN.",
  });

  context.throws(() => stringifyNumber('Muahahahaha'), {
    instanceOf: Error,
    message: "Can't stringify NaN.",
  });

  context.throws(() => stringifyNumber((null as any) as number), {
    instanceOf: Error,
    message: "Can't stringify NaN.",
  });

  context.throws(() => stringifyNumber((undefined as any) as number), {
    instanceOf: Error,
    message: "Can't stringify NaN.",
  });

  context.throws(() => stringifyNumber((true as any) as number), {
    instanceOf: Error,
    message: "Can't stringify NaN.",
  });

  context.throws(() => stringifyNumber((false as any) as number), {
    instanceOf: Error,
    message: "Can't stringify NaN.",
  });

  context.throws(() => stringifyNumber(([] as any) as number), {
    instanceOf: Error,
    message: "Can't stringify NaN.",
  });
});

test('throws error if received number is Infinity or -Infinity', (context) => {
  context.throws(() => stringifyNumber(Infinity), {
    instanceOf: Error,
    message: "Can't stringify Infinity or -Infinity.",
  });

  context.throws(() => stringifyNumber('Infinity'), {
    instanceOf: Error,
    message: "Can't stringify Infinity or -Infinity.",
  });

  context.throws(() => stringifyNumber(-Infinity), {
    instanceOf: Error,
    message: "Can't stringify Infinity or -Infinity.",
  });

  context.throws(() => stringifyNumber('-Infinity'), {
    instanceOf: Error,
    message: "Can't stringify Infinity or -Infinity.",
  });
});

test('throws error if received number is displayed in scientific notation', (context) => {
  context.throws(() => stringifyNumber(1e23), {
    instanceOf: Error,
    message: "Can't stringify number displayed in scientific notation.",
  });

  context.throws(() => stringifyNumber('1e+23'), {
    instanceOf: Error,
    message: "Can't stringify number displayed in scientific notation.",
  });

  context.throws(() => stringifyNumber(128973872189378978912837989127), {
    instanceOf: Error,
    message: "Can't stringify number displayed in scientific notation.",
  });

  context.throws(() => stringifyNumber('99999999999999999999999999'), {
    instanceOf: Error,
    message: "Can't stringify number displayed in scientific notation.",
  });
});

test('stringifies number in the start of received string', (context) => {
  context.is(stringifyNumber('1366px'), '1366');
  context.is(stringifyNumber('29,99 $'), '29');
  context.is(stringifyNumber('9018239'), '9018239');
});

test('stringifies received bigint as number', (context) => {
  context.is(stringifyNumber(10n), '10');
  context.is(
    stringifyNumber(584975689546798239083274809n),
    '584975689546798239083274809',
  );
});

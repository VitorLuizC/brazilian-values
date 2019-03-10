# Brazilian Values

[![Build Status](https://travis-ci.org/VitorLuizC/brazilian-values.svg?branch=master)](https://travis-ci.org/VitorLuizC/brazilian-values)

Validates and formats brazilian values, like money (BRL), CPF, CNPJ, dates etc.

## Install

This module is published under NPM registry, so you can install using any Node.js package manager.

```sh
npm install brazilian-values --save

# For Yarn use the command below.
yarn add brazilian-values
```

## Usage

`brazilian-values` provides functions to deal with formatting, validating and parsing brazilian values. All those functions could be imported from package.

```js
import { isCNPJ, formatToCNPJ } from 'brazilian-values';

const value = '12727442000113'

if (!isCNPJ(value))
  throw new Error('CNPJ is not valid.');
const document = formatToCNPJ(value);
//=> '12.727.442/0001-13'
```

## API

### Formatters

#### `formatToBRL`

Formats numbers or texts containing numbers to brazilian currency (BRL).

```js
formatToBRL(1928.93)
//=> 'R$ 1.928,93'

formatToBRL('9211928.18203')
//=> 'R$ 9.211.928,18'

formatToBRL(-18.49)
//=> 'R$ -18,49'
```

#### `formatToCEP`

Formats a text containing numbers to CEP.

```js
formatToCEP('15998030')
//=> '15998-030'

formatToCEP('02999')
//=> '02999'
```

#### `formatToCNPJ`

Formats a text containing numbers to CNPJ.

```js
formatToCNPJ('128781')
//=> '12.878.1'

formatToCNPJ('32284981000138')
//=> '32.284.981/0001-38'

formatToCNPJ('00.0.000.00.00--00-00')
//=> '00.000.000/0000-00'
```

#### `formatToCPF`

Formats a text containing numbers to CPF.

```js
formatToCPF('00000000')
//=> '000.000.00'

formatToCPF('00000000000')
//=> '000.000.000-00'

formatToCPF('366.418.768-70')
//=> '366.418.768-70'
```

#### `formatToDate`

Formats a `Date` instance to brazilian formatted date.

```js
formatToDate(new Date(2002, 7, 21))
//=> '21/08/2002'

formatToDate(new Date())
//=> '08/09/2018'
```

#### `formatToDate`

Formats a number to brazilian formatted number.

```js
formatToNumber(0)
//=> '0'

formatToNumber(-1299)
//=> '-1.299'

formatToNumber(.981)
//=> '0,981'

formatToNumber('19898.1298')
//=> '19.898,1298'
```

#### `formatToPhone`

Formats a text containing numbers to common brazilian phone.

```js
formatToPhone('11')
//=> '(11'

formatToPhone('11971626')
//=> '(11) 9716-26'

formatToPhone('11971626799')
//=> '(11) 9 7162-6799'
```

#### `formatToRG`

Formats a text containing numbers to RG, specifying the state.

> Today, `brazilian-values` supports only **SP** and **RJ** formats.
> Other values are just escaped to input.

```js
formatToRG('00000000A', 'SP')
//=> '00.000.000-A'

formatToRG('00.00.0000-0', 'RJ')
//=> '00.000.000-0'

formatToRG('MG-14.808.688', 'MG')
//=> 'MG-14.808.688'
```

### Parsers

#### `parseToArray`

Parses a brazilian formatted list into an Array.

```js
parseToArray('')
//=> []

parseToArray('1')
//=> ['1']

parseToArray('1 e 2')
//=> ['1', '2']

parseToArray('Fernanda, Luana e Ana Carolina')
//=> ['Fernanda', 'Luana', 'Ana Carolina']
```

#### `parseToDate`

Parses a brazilian formatted date to a Date instance.

> Throws an error if value does not match brazilian date format and if value is an invalid date.

```js
parseToDate('28/03/1996')
//=> Date('1996-03-28T03:00:00.000Z')

parseToDate('31/02/2018')
//=> throws Error('Value "31/02/2018" is an invalid date.')
```

#### `parseToNumber`

Parses a brazilian formatted number to a number.

```js
parseToNumber('10')
//=> 10

parseToNumber('-1.299')
//=> -1299

parseToNumber('0,981')
//=> 0.981

parseToNumber('19.898,1298')
//=> 19898.1298
```

### Validators

#### `isCNPJ`

Validates if value is a CNPJ.

```js
isCNPJ('41142260000189')
//=> true

isCNPJ('45.723.174/0001-10')
//=> true

isCNPJ('411407182')
//=> false

isCNPJ('11.111.111/1111-11')
//=> false
```

#### `isCPF`

Validates if values is a CPF.

```js
isCPF('366.418.768-70')
//=> true

isCPF('36641876870')
//=> true

isCPF('213.198.013-20')
//=> false

isCPF('2131201872781')
//=> false

isCPF('11111111111')
//=> false
```

#### `isDate`

Validates if value matches brazilian date format and is a valid date.

```js
isDate('03/08/2017')
//=> true

isDate('28/13/2017')
//=> false

isDate('03-08-2017')
//=> false

isDate('31/03/18')
//=> false
```

## License

Released under [MIT license](./LICENSE).

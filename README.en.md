# Brazilian Values

[🇧🇷 Trocar para a versão em português](./README.md)

[![Build Status](https://travis-ci.org/VitorLuizC/brazilian-values.svg?branch=master)](https://travis-ci.org/VitorLuizC/brazilian-values)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FVitorLuizC%2Fbrazilian-values.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FVitorLuizC%2Fbrazilian-values?ref=badge_shield)
[![License](https://badgen.net/github/license/VitorLuizC/brazilian-values)](./LICENSE)
[![Library minified size](https://badgen.net/bundlephobia/min/brazilian-values)](https://bundlephobia.com/result?p=brazilian-values)
[![Library minified + gzipped size](https://badgen.net/bundlephobia/minzip/brazilian-values)](https://bundlephobia.com/result?p=brazilian-values)

Validates and formats brazilian values, like money (BRL), CPF, CNPJ, dates etc.

Read this in other language: [Brazilian portuguese](https://github.com/g1llz/brazilian-values/blob/master/README.br.md)
## Install

This module is published under NPM registry, so you can install using any Node.js package manager.

```sh
npm install brazilian-values --save

# For Yarn use the command below.
yarn add brazilian-values
```

### Install from CDN

The bundles of this module are also available on [JSDelivr](https://www.jsdelivr.com/) and [UNPKG](https://unpkg.com/) CDNs.

> In both you can import just the _bundle_ you want or use default one, UMD.

```html
<!-- Using default bundle from JSDelivr -->
<script src="https://cdn.jsdelivr.net/npm/brazilian-values"></script>

<!-- Using default bundle from UNPKG -->
<script src="https://unpkg.com/brazilian-values"></script>

<script>
  /**
   * UMD bundle expose brazilian-values through `BrazilianValues` object.
   */
  BrazilianValues.formatToBRL(100);
  //=> 'R$ 100,00'
</script>
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

<details>
  <summary>Formatters</summary>

- [`formatToBRL`](#formatToBRL)
- [`formatToCapitalized`](#formatToCapitalized)
- [`formatToCEP`](#formatToCEP)
- [`formatToCNPJ`](#formatToCNPJ)
- [`formatToCPF`](#formatToCPF)
- [`formatToCPFOrCNPJ`](#formatToCPFOrCNPJ)
- [`formatToDate`](#formatToDate)
- [`formatToDateTime`](#formatToDateTime)
- [`formatToList`](#formatToList)
- [`formatToNumber`](#formatToNumber)
- [`formatToPhone`](#formatToPhone)
- [`formatToRG`](#formatToRG)
</details>

<details>
  <summary>Parsers</summary>

- [`parseToArray`](#parseToArray)
- [`parseToDate`](#parseToDate)
- [`parseToNumber`](#parseToNumber)
</details>

<details>
  <summary>Validators</summary>

- [`isCEP`](#isCEP)
- [`isCNPJ`](#isCNPJ)
- [`isCPF`](#isCPF)
- [`isCPFOrCNPJ`](#isCPFOrCNPJ)
- [`isDate`](#isDate)
- [`isDDD`](#isDDD)
- [`isPhone`](#isPhone)
</details>

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

#### `formatToCapitalized`

Capitalizes the words in a text, except for words that are set to be uppercase or lowercase.

> The first word of the text will not be lowercase even if set to.

```js
formatToCapitalized('SERVIDOR PÚBLICO MUNICIPAL')
//=> 'Servidor Público Municipal'

formatToCapitalized('   os PrimEIROS  HOMens da tERra', {
  wordsToKeepLowerCase: ['os', 'da']
})
//=> 'Os Primeiros Homens da Terra'

formatToCapitalized('nova tv foi lançada', {
  wordsToKeepUpperCase: ['tv']
})
//=> 'Nova TV Foi Lançada'

formatToCapitalized(' com espaços antes e depois ', {
  trimTrailingWhiteSpaces: false
})
//=> ' Com Espaços Antes e Depois '
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

#### `formatToCPFOrCNPJ`

Formats a `string` value containing numbers to CPF or CNPJ depending on its length.

```js
formatToCPFOrCNPJ('00000000')
//=> '000.000.00'

formatToCPFOrCNPJ('366.418.768-70')
//=> '366.418.768-70'

formatToCPFOrCNPJ('32284981000138')
//=> '32.284.981/0001-38'

formatToCPFOrCNPJ('00.0.000.00.00--00-00')
//=> '00.000.000/0000-00'
```

#### `formatToDate`

Formats a `Date` instance to brazilian formatted date, **`DD/MM/YYYY`**.

```js
formatToDate(new Date(2002, 7, 21))
//=> '21/08/2002'

formatToDate(new Date())
//=> '08/09/2018'
```


#### `formatToDateTime`

Formats a `Date` instance to brazilian formatted date and time, **`DD/MM/YYYY HH:mm`**.

```js
formatToDateTime(new Date(2002, 7, 21, 18, 30))
//=> '21/08/2002 18:30'
```

#### `formatToList`

Formats an `Array` of `string` values into brazilian formatted list.

```js
formatToList(['Vitor', 'William', 'Fernando'])
//=> 'Vitor, William e Fernando'

formatToList([])
// => ''

formatToList(['1', '2'])
// => '1 e 2'

formatToList(['Direito Civil'])
//=> 'Direito Civil'
```

#### `formatToNumber`

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

parseToDate('28/03/1996 20:00')
//=> Date('1996-03-28T23:00:00.000Z')

parseToDate('28/03/1996 20:00:00')
//=> Date('1996-03-28T23:00:00.000Z')

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

#### `isCEP`

Validates if valur is a CEP.

```js
isCEP('50.833-000')
//=> true

isCEP('02998-050')
//=> true

isCEP('00000000')
//=> true

isCEP('0')
//=> false

isCEP('1982891928981982198')
//=> false
```

#### `isCNPJ`

Validates if value is a CNPJ.

> Related: [`isCPFOrCNPJ`](#isCPFOrCNPJ).

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

Validates if value is a CPF.

> Related: [`isCPFOrCNPJ`](#isCPFOrCNPJ).

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

#### `isCPFOrCNPJ`

Validates if value is either a CPF or a CNPJ.

> Related: [`isCPF`](#isCPF), [`isCNPJ`](#isCNPJ).

```js
isCPFOrCNPJ('366.418.768-70')
//=> true

isCPFOrCNPJ('36641876870')
//=> true

isCPFOrCNPJ('213.198.013-20')
//=> false

isCPFOrCNPJ('2131201872781')
//=> false

isCPFOrCNPJ('11111111111')
//=> false

isCPFOrCNPJ('41142260000189')
//=> true

isCPFOrCNPJ('45.723.174/0001-10')
//=> true

isCPFOrCNPJ('411407182')
//=> false

isCPFOrCNPJ('11.111.111/1111-11')
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

#### `isDDD`

Validates if value is a brazilian valid DDD (direct dialing at a distance) code.

> Based on [resolution No. 263 of June 8, 2001](https://www.anatel.gov.br/legislacao/resolucoes/16-2001/383-resolucao-263).

```js
isDDD('81')
//=> true

isDDD('10')
//=> false

isDDD('555')
//=> false
```

#### `isPhone`

Validates if value matches common brazilian phone number, optionally with DDI, DDD and the ninth digit. If DDD is defined it'll be validated with `isDDD`.

```js
isPhone('+55 (11) 9 8273-1182')
//=> true

isPhone('11 9 8273 1182')
//=> true

isPhone('1139723768')
//=> true

isPhone('(23) 3972-3768')
//=> false

isPhone('(13) 6 5093-2093')
//=> false

isPhone('(81) 555 178')
//=> false
```

## License

Released under [MIT license](./LICENSE).

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FVitorLuizC%2Fbrazilian-values.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FVitorLuizC%2Fbrazilian-values?ref=badge_large)

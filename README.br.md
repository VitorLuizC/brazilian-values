# Brazilian Values

[![Build Status](https://travis-ci.org/VitorLuizC/brazilian-values.svg?branch=master)](https://travis-ci.org/VitorLuizC/brazilian-values)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FVitorLuizC%2Fbrazilian-values.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FVitorLuizC%2Fbrazilian-values?ref=badge_shield)

Validar e formatar valores brasileiros como dinheiro (BRL), CPF, CNPJ, datas etc.

## Instalação

Este módulo é publicado sob o registro NPM, então você pode instalar usando qualquer gerenciador de pacotes Node.js.

```sh
npm install brazilian-values --save

# Para o Yarn, use o comando abaixo.
yarn add brazilian-values
```

## Como usar

`brazilian-values` fornece funções para lidar com formatação, validação e análise (parse) de valores brasileiros. Todas essas funções podem ser importadas do pacote. 

```js
import { isCNPJ, formatToCNPJ } from 'brazilian-values';

const value = '12727442000113'

if (!isCNPJ(value))
  throw new Error('CNPJ is not valid.');
const document = formatToCNPJ(value);
//=> '12.727.442/0001-13'
```

## API

### Formatação

#### `formatToBRL`

Formata números ou `string` que contém números para a moeda brasileira (BRL).

```js
formatToBRL(1928.93)
//=> 'R$ 1.928,93'

formatToBRL('9211928.18203')
//=> 'R$ 9.211.928,18'

formatToBRL(-18.49)
//=> 'R$ -18,49'
```

#### `formatToCEP`

Formata uma `string` que contém números em CEP.

```js
formatToCEP('15998030')
//=> '15998-030'

formatToCEP('02999')
//=> '02999'
```

#### `formatToCNPJ`

Formata uma `string` que contém números em CNPJ.

```js
formatToCNPJ('128781')
//=> '12.878.1'

formatToCNPJ('32284981000138')
//=> '32.284.981/0001-38'

formatToCNPJ('00.0.000.00.00--00-00')
//=> '00.000.000/0000-00'
```

#### `formatToCPF`

Formata uma `string` que contém números em CPF.

```js
formatToCPF('00000000')
//=> '000.000.00'

formatToCPF('00000000000')
//=> '000.000.000-00'

formatToCPF('366.418.768-70')
//=> '366.418.768-70'
```

#### `formatToDate`

Formata uma instância de `Date` para o estilo brasileiro.

```js
formatToDate(new Date(2002, 7, 21))
//=> '21/08/2002'

formatToDate(new Date())
//=> '08/09/2018'
```

#### `formatToList`

Formata os valores de um `Array` de `string` no estilo brasileiro. 

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

Formata um número para o estilo brasileiro.

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

Formata uma `string` contendo números para o estilo do número de telefone brasileiro.

```js
formatToPhone('11')
//=> '(11'

formatToPhone('11971626')
//=> '(11) 9716-26'

formatToPhone('11971626799')
//=> '(11) 9 7162-6799'
```

#### `formatToRG`

Formata uma `string` contendo números para RG.

> Hoje, `brazilian-values` suporta apenas os formatos de **SP** e **RJ**.<br/>
> Outros valores serão apenas "escapados" no `input`.

```js
formatToRG('00000000A', 'SP')
//=> '00.000.000-A'

formatToRG('00.00.0000-0', 'RJ')
//=> '00.000.000-0'

formatToRG('MG-14.808.688', 'MG')
//=> 'MG-14.808.688'
```

### Conversores

#### `parseToArray`

Converte uma lista no formato brasileiro para um `Array`.

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

Converte a data no formato brasileiro para uma instância de `Date`.

> Lança um erro se o valor for inválido ou não corresponder a o formato de data brasileiro.

```js
parseToDate('28/03/1996')
//=> Date('1996-03-28T03:00:00.000Z')

parseToDate('31/02/2018')
//=> throws Error('Value "31/02/2018" is an invalid date.')
```

#### `parseToNumber`

Converte o número no estilo brasileiro para um número.

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

### Validadores

#### `isCNPJ`

Verifica se é um CNPJ válido.

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

Verifica se é um CPF válido.

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

Verifica se é uma data válida e se corresponde ao formato brasileiro.

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

## Licença

Lançado sob a licença [MIT](./LICENSE).


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FVitorLuizC%2Fbrazilian-values.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FVitorLuizC%2Fbrazilian-values?ref=badge_large)
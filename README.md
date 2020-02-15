# Brazilian Values

[🇺🇸 Switch to english version](./README.en.md)

[![Build Status](https://travis-ci.org/VitorLuizC/brazilian-values.svg?branch=master)](https://travis-ci.org/VitorLuizC/brazilian-values)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FVitorLuizC%2Fbrazilian-values.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FVitorLuizC%2Fbrazilian-values?ref=badge_shield)
[![Licença](https://badgen.net/github/license/VitorLuizC/brazilian-values)](./LICENSE)
[![Tamanho da biblioteca minificada](https://badgen.net/bundlephobia/min/brazilian-values)](https://bundlephobia.com/result?p=brazilian-values)
[![Tamanho da biblioteca minificada + gzipada](https://badgen.net/bundlephobia/minzip/brazilian-values)](https://bundlephobia.com/result?p=brazilian-values)

Validar e formatar valores brasileiros como dinheiro (BRL), CPF, CNPJ, datas etc.

## Instalação

Este módulo está publicado no NPM, por isso você pode instalar usando qualquer gerenciador de pacotes Node.js.

```sh
npm install brazilian-values --save

# Use o comando abaixo para o Yarn.
yarn add brazilian-values
```

### Instalação por CDN

Os pacotes desse módulo também estão disponíveis nas CDNs [JSDelivr](https://www.jsdelivr.com/) e [UNPKG](https://unpkg.com/).

> Em ambas você pode solicitar o pacote desejado ou usar o padrão, que é o UMD.

```html
<!-- Usando o pacote padrão com o JSDelivr -->
<script src="https://cdn.jsdelivr.net/npm/brazilian-values"></script>

<!-- Usando o pacote padrão com o UNPKG -->
<script src="https://unpkg.com/brazilian-values"></script>

<script>
  /**
   * O pacote UMD expõe o brazilian-values com o objeto `BrazilianValues`.
   */
  BrazilianValues.formatToBRL(100);
  //=> 'R$ 100,00'
</script>
```

## Como usar

`brazilian-values` fornece funções para lidar com formatação, validação e conversão de valores brasileiros. Todas essas funções podem ser importadas do pacote.

```js
import { isCNPJ, formatToCNPJ } from 'brazilian-values';

const value = '12727442000113'

if (!isCNPJ(value))
  throw new Error('CNPJ is not valid.');
const document = formatToCNPJ(value);
//=> '12.727.442/0001-13'
```
## Sumário API

- [Formatação](#Formatação)
- [Conversores](#Conversores)
- [Validadores](#Validadores)

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

#### `formatToCapitalized`

Capitaliza as palavras de um texto, com exceção das palavras configuradas para serem deixadas em caixa-alta ou em caixa-baixa.

> A primeira palavra do texto não será caixa-baixa mesmo se configurada como.

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

#### `formatToCPFOrCNPJ`

Formata uma `string` que contém números em CPF ou CNPJ dependendo da quantidade de caracteres.

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

Formata uma instância de `Date` para o estilo brasileiro, **`DD/MM/YYYY`**.

```js
formatToDate(new Date(2002, 7, 21))
//=> '21/08/2002'

formatToDate(new Date())
//=> '08/09/2018'
```

#### `formatToDateTime`

Formata uma instância de `Date` para o data e horário no formato brasileiro, **`DD/MM/YYYY HH:mm`**.

```js
formatToDateTime(new Date(2002, 7, 21, 18, 30))
//=> '21/08/2002 18:30'
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

Converte uma lista no formato brasileiro para um `Array` de `string`.

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

#### `isCEP`

Verifica se é um CEP válido.

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

#### `isDDD`

Verifica se é um código DDD (discagem direta à distância) brasileiro válido.

> Baseado na [resolução nº 263, de 8 de junho de 2001](https://www.anatel.gov.br/legislacao/resolucoes/16-2001/383-resolucao-263).

```js
isDDD('81')
//=> true

isDDD('10')
//=> false

isDDD('555')
//=> false
```

#### `isPhone`

Verifica se está em um formato comum de número de telefone brazileiro, opcionalmente com DDI, DDD e o nono dígito.
Se o DDD estiver definido ele será verificado com `isDDD`.

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

## Licença

Lançado sob a licença [MIT](./LICENSE).

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FVitorLuizC%2Fbrazilian-values.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FVitorLuizC%2Fbrazilian-values?ref=badge_large)
